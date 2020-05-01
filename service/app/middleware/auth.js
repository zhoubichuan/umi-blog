const { verify } = require("jsonwebtoken");
module.exports = (options, app) => {
  return async function(ctx, next) {
    let token = ctx.get("authorization");
    if (token) {
      try {
        let user = await verifyToken(token, app.config.jwtSecret);
        await next();
      } catch (err) {
        ctx.status = 401;
        ctx.body = "token验证失败";
      }
    } else {
      ctx.status = 401;
      ctx.body = "token未传!";
    }
  };
};

function verifyToken(token, jwtSecret) {
  return new Promise(function(resolve, reject) {
    verify(token, jwtSecret, async (err, user) => {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    });
  });
}
