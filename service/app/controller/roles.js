const BaseController = require("./base");

class Controller extends BaseController {
  constructor(...args) {
    super(...args);
    this.model = "roles";
  }
}

module.exports = Controller;
