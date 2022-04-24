const Manager = require("../main/assets/js/manager");

test("creates a new manager object", () => {
  const manager = new Manager("Bobby");
  manager.id = 12345;
  manager.email = "bobby@mail.com";
  manager.office = 54321;

  expect(manager.name).toBe("Bobby");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toBe("bobby@mail.com");
  expect(manager.office).toEqual(expect.any(Number));
});
