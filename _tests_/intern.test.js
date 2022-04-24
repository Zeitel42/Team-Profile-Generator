const Intern = require("../main/assets/js/intern");

test("create a new intern object", () => {
  const intern = new Intern("Jessi");

  expect(intern.name).toBe("Jessi");
});
