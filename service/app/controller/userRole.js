const BaseController = require("./base");

class Controller extends BaseController {
  constructor(...args) {
    super(...args);
    this.model = "user_role";
  }
}

module.exports = Controller;
