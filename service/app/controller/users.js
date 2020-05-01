const BaseController = require("./base");
const { sign } = require("jsonwebtoken");
const svgCaptcha = require("svg-captcha");
class Controller extends BaseController {
  constructor(...args) {
    super(...args);
    this.model = "users";
  }
  async login() {
    let { app, ctx } = this;
    let body = ctx.request.body;
    let result = await app.mysql.seletc("users", {
      where: { username: body.username, password: body.password },
      limit: 1,
      offset: 0
    });
    if (result && result.length > 0) {
      let oldUser = JSON.parse(JSON.stringify(result[0]));
      delete oldUser.password;
      let token = sign(oldUser, app.config.jwtSecret);
      this.success(token);
    } else {
      this.error("用户名或密码不正确");
    }
    this.ctx.body = body;
  }
  async signup() {
    let { app, ctx } = this;
    let body = ctx.request.body;
    let username = body.username;
    try {
      if (
        !ctx.session.captcha ||
        body.captcha.toLowerCase() != ctx.session.captcha.toLowerCase()
      ) {
        return this.error("验证码不正确");
      }

      let sameUsernameUsers = await app.mysql.select("users", {
        where: { username }
      });
      if (sameUsernameUsers && sameUsernameUsers.length > 0) {
        return this.error("用户名重复，请换一个用户名");
      }
      delete body.confirm;
      delete body.captcha;
      body["create_time"] = new Date();
      body.address = body.address ? body.address.join("-") : "";
      let result = await app.mysql.insert("users", body);
      this.success("注册成功");
    } catch (err) {
      this.error(err.toString());
    }
    this.ctx.body = body;
  }
  async captcha() {
    let captcha = svgCaptcha.createMathExpr();
    this.ctx.session.captcha = captcha.text;
    this.ctx.set("Content-Type", "image/svg+xml");
    this.ctx.body = captcha.data;
  }
}
module.exports = Controller;
