const Engineer = require("../lib/engineer");

describe("engineer", () => {
  describe("constructor function", () => {
    it("should create an object with name, id, email, and GitHub username properties", () => {
      const engineer = new Engineer("Seth", 44, "seth@seth.com", "seff0");

      expect(engineer.name).toEqual("Seth");
      expect(engineer.id).toEqual(44);
      expect(engineer.email).toEqual("seth@seth.com");
      expect(engineer.gitHub).toEqual("seff0");
    });
  });
});
