const Employee = require("../lib/employee");

describe("employee", () => {
  describe("constructor function", () => {
    it("should create an object with name, id, and email properties", () => {
      const employee = new Employee("Seth", 44, "seth@seth.com");

      expect(employee.name).toEqual("Seth");
      expect(employee.id).toEqual(44);
      expect(employee.email).toEqual("seth@seth.com");
    });
  });
});
