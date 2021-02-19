const Manager = require("../lib/manager");

describe("manager", () => {
  describe("constructor function", () => {
    it("should create an object with name, id, email, and school properties", () => {
      const manager = new Manager("Seth", 44, "seth@seth.com", 10);

      expect(manager.name).toEqual("Seth");
      expect(manager.id).toEqual(44);
      expect(manager.email).toEqual("seth@seth.com");
      expect(manager.officeNum).toEqual(10);
    });
  });
});
