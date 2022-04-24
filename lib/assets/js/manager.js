const employee = require("./employee");

class Manager extends employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
  }

  getRole() {
    return `Manager`;
  }
}
module.exports = Manager;
