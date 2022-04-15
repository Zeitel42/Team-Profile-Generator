const Manager = require("../main/manager");

test("creates a new manager object", () => {
  const manager = new Manager("Bobby");

  expect(manager.name).toBe("Bobby");
});
