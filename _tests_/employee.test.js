const Employee = require("../lib/assets/js/employee");

test("creates a new employee object", () => {
  const employee = new Employee("Bobby");
  employee.id = 12345;
  employee.email = "bobby@mail.com";

  expect(employee.name).toBe("Bobby");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe("bobby@mail.com");
});
