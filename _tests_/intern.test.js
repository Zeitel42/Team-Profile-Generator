const Intern = require("../main/assets/js/intern");

test("create a new intern object", () => {
  const intern = new Intern("Jessi");

  intern.id = 12345;
  intern.email = "jessi@mail.com";
  intern.school = "UNC";

  expect(intern.name).toBe("Jessi");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toBe("jessi@mail.com");
  expect(intern.school).toBe("UNC");
});
