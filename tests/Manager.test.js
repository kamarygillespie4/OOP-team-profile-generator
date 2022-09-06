const Manager = require("../lib/Manager.js");

describe("Pulls information from Manager constructor", () => {
    const name = "Kamary";
    const id = 273;
    const email = "gillespiekamary@gmail.com";
    const role = "Manager";
    const officeNumber = 465

    const testManager = new Manager(name, id, email, officeNumber);

    it("Should return the Intern name", () => {
        expect(testManager.getName()).toBe(name);
    });

    it("Should return the Intern id", () => {
        expect(testManager.getId()).toBe(id);
    });

    it("Should return the Intern email", () => {
        expect(testManager.getEmail()).toBe(email);
    });

    it("Should return the Intern role", () => {
        expect(testManager.getRole()).toBe(role);
    });

    it("Should return the Intern school", () => {
        expect(testManager.getOfficeNumber()).toBe(officeNumber);
    });
});