const BaseController = require("./base");

class Controller extends BaseController {
  constructor(...args) {
    super(...args);
    this.model = "rol_resource";
  }
}

module.exports = Controller;
