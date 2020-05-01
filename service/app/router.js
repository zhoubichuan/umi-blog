/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const auth = app.middleware.auth({}, app);
  app.resources("users", "/users", auth, controller.users);
  app.resources("roles", "/roles", auth, controller.roles);
  app.resources("resources", "/resources", auth, controller.resources);
  app.resources("userRole", "/userRole", auth, controller.userRole);
  app.resources("roleResource", "/roleResource", auth, controller.roleResource);
  router.post("/login", controller.users.login);
  router.post("/signup", controller.users.signup);
  router.get("/captcha", controller.users.captcha);
};
