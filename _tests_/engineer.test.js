const Engineer = require("../main/engineer");

test("creates a new engineer", () => {
  const engineer = new Engineer("Nerd");

  expect(engineer.name).toBe("Nerd");
});
