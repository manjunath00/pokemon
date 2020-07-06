const chai = require("chai");
const request = require("supertest");

const app = require("../index");

/* 
what to test
 -> test for all the methods
 -> test for the models
*/

it("Get all pokemon responds with json", function (done) {
  request(app)
    .get("/api/pokemons")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) return done(err);
      done();
    });
});

it("Get a single pokemon & throw an error", function (done) {
  request(app)
    .get("/api/pokemon/123")
    .expect({ message: "Pokemon not found in db" })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(400)
    .end(function (err, res) {
      if (err) return done(err);
      done();
    });
});
