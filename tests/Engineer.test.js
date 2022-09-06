const Engineer = require("../lib/Engineer.js");

describe("Pulls information from Employee constructor", () => {
    const name = "Kamary";
    const id = 273;
    const email = "gillespiekamary@gmail.com";
    const role = "Engineer";
    const github = "kamarygillespie4"

    const testEngineer = new Engineer(name, id, email, github);

    it("Should return the Employee name", () => {
        expect(testEngineer.getName()).toBe(name);
    });

    it("Should return the Employee id", () => {
        expect(testEngineer.getId()).toBe(id);
    });

    it("Should return the Employee email", () => {
        expect(testEngineer.getEmail()).toBe(email);
    });

    it("Should return the Employee role", () => {
        expect(testEngineer.getRole()).toBe(role);
    });

    it("Should return the github ", () => {
        expect(testEngineer.getGithub()).toBe(github);
    });
});