const Intern = require("../lib/intern");

describe("intern", () => {
  describe("constructor function", () => {
    it("should create an object with name, id, email, and school properties", () => {
      const intern = new Intern("Seth", 44, "seth@seth.com", "DU");

      expect(intern.name).toEqual("Seth");
      expect(intern.id).toEqual(44);
      expect(intern.email).toEqual("seth@seth.com");
      expect(intern.school).toEqual("DU");
    });
  });
});
