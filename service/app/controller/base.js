const { Controller } = require("egg");

class BaseController extends Controller {
  constructor(...args) {
    super(...args);
  }
  success(data) {
    this.ctx.body = {
      code: 0,
      data
    };
  }
  error(error) {
    this.ctx.body = {
      code: 1,
      error
    };
  }
  async index() {
    const { app, ctx } = this;
    let { current, pageSize } = ctx.query;
    current = isNaN(current) ? 1 : Number(current);
    pageSize = isNaN(pageSize) ? 3 : Number(pageSize);
    const list = await app.mysql.select(this.model, {
      offset: (current - 1) * pageSize,
      limit: pageSize
    });
    const total = await app.mysql.count(this.model);
    this.success({ total, list });
  }
  async create() {
    const { app, ctx } = this;
    const body = ctx.request.body;
    if (body.username == "admin") {
      return this.error("用户名不能是admin");
    }
    const { insertId } = await app.mysql.insert(this.model, body);
    this.success(insertId);
  }
  async show() {
    const { app, ctx } = this;
    const id = ctx.params.id;
    const entity = await app.mysql.get(this.model, { id });
    this.success(entity);
  }
  async update() {
    const { app, ctx } = this;
    const body = ctx.request.body;
    const result = await app.mysql.update(this.model, body);
    const entity = await app.mysql.get(this.model, { id: body.id });
    this.success(entity);
  }
  async destroy() {
    const { app, ctx } = this;
    const id = ctx.params.id;
    const result = await app.mysql.delete(this.model, { id });
    this.success("删除成功");
  }
}
module.exports = BaseController;
