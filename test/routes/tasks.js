import jwt from "jwt-simple";

describe("Routes: Tasks", () => {
  const Users = app.db.models.Users;
  const Tasks = app.db.models.Tasks;
  const jwtSecrets = app.libs.config.jwtSecrets;

  let token;
  let fakeTask;

  beforeEach(done => {

  });

  describe("GET /tasks", () => {
    describe("status 200", () => {
      it("returns a list of tasks", done => {

      });
    });
  });

  describe("POTS /tasks", () => {
    describe("status 200", () => {
      it("create a new task", done => {

      });
    });
  });

  describe("GET /tasks/:id", () => {
    describe("status 200", () => {
      it("returns one task", done => {

      });
    });
    describe("status 404", () => {
      it("throws error when task not exist", done => {

      });
    });
  });

  describe("PUT /tasks/:id", () => {
    describe("status 204", () => {
      it("update a task", done => {

      });
    });
  });

  describe("DELETE /tasks/:id", () => {
    describe("status 204", () => {
      it("remove a task", done => {

      });
    });
  });
});
