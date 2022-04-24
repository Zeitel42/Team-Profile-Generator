const Engineer = require("../lib/assets/js/engineer");

test("creates a new engineer", () => {
  const engineer = new Engineer("Bobby");

  engineer.id = 12345;
  engineer.email = "bobby@mail.com";
  engineer.github = "number2";

  expect(engineer.name).toBe("Bobby");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toBe("bobby@mail.com");
  expect(engineer.github).toBe("number2");
});
