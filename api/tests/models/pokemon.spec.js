const { Pokemon, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Pokemon model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Pokemon.create({ name: "Pikachu" });
      });
    });
  });
  describe("Number Validation", () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe("number", () => {
      it("should throw an error if health is not a number", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a numbre")))
          .catch(() => done());
      });
      it("should work when its a valid number", () => {
        Pokemon.create({ healthpoints: 45 });
      });
    });
  });

  describe("Post Validation", function () {
    it("missing data from the body", function (done) {
      Pokemon.create({
        content: "Hola",
      })
        .then(() => done("No debería haberse creado"))
        .catch(() => done());
    });
  });
});
