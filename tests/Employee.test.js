const Employee = require("../lib/Employee.js");

describe("Pulls information from Employee constructor", () => {
    const name = "Kamary";
    const id = 273;
    const email = "gillespiekamary@gmail.com";
    const role = "Employee";

    const testEmployee = new Employee(name, id, email);

    it("Should return the Employee name", () => {
        expect(testEmployee.getName()).toBe(name);
    });

    it("Should return the Employee id", () => {
        expect(testEmployee.getId()).toBe(id);
    });

    it("Should return the Employee email", () => {
        expect(testEmployee.getEmail()).toBe(email);
    });

    it("Should return the Employee role", () => {
        expect(testEmployee.getRole()).toBe(role);
    });
});