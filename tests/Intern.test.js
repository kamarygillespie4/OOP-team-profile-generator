const Intern = require("../lib/Intern.js");

describe("Pulls information from Intern constructor", () => {
    const name = "Kamary";
    const id = 273;
    const email = "gillespiekamary@gmail.com";
    const role = "Intern";
    const school = "DU"

    const testIntern = new Intern(name, id, email, school);

    it("Should return the Intern name", () => {
        expect(testIntern.getName()).toBe(name);
    });

    it("Should return the Intern id", () => {
        expect(testIntern.getId()).toBe(id);
    });

    it("Should return the Intern email", () => {
        expect(testIntern.getEmail()).toBe(email);
    });

    it("Should return the Intern role", () => {
        expect(testIntern.getRole()).toBe(role);
    });

    it("Should return the Intern school", () => {
        expect(testIntern.getSchool()).toBe(school);
    });
});