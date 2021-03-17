const express = require("express");
const cors = require("cors");

//users
const users = require("./repository/UsersRepository").users;

// use cases
const createUserUC = require("./usecases/CreateUserUC").execute;
const findUserById = require("./usecases/middleware/FindUserByIdUC").execute;
const getUserAccordingIdUC = require("./usecases/GetUserAccordingIdUC").execute;
const updateUserToProPlanUC = require("./usecases/UpdateUserToProPlanUC")
  .execute;
const checksExistsUserAccount = require("./usecases/middleware/CheckExistsUserAccountUC")
  .execute;
const getTodosUC = require("./usecases/GetTodosUC").execute;
const checksCreateTodosUserAvailability = require("./usecases/middleware/CheckCreateTodosUserAvailabilityUC")
  .execute;
const createTodoUC = require("./usecases/CreateTodoUC").execute;
const checksTodoExists = require("./usecases/middleware/CheckTodoExistsUC")
  .execute;
const updateTodoToDoneUC = require("./usecases/UpdateTodoToDoneUC").execute;
const updateTodoUC = require("./usecases/UpdateTodoUC").execute;
const deleteTodoUC = require("./usecases/DeleteTodoUC").execute;

const app = express();
app.use(express.json());
app.use(cors());

app.post("/users", createUserUC);
app.get("/users/:id", findUserById, getUserAccordingIdUC);
app.patch("/users/:id/pro", findUserById, updateUserToProPlanUC);

app.get("/todos", checksExistsUserAccount, getTodosUC);
app.post(
  "/todos",
  checksExistsUserAccount,
  checksCreateTodosUserAvailability,
  createTodoUC
);
app.put("/todos/:id", checksTodoExists, updateTodoUC);
app.patch("/todos/:id/done", checksTodoExists, updateTodoToDoneUC);
app.delete(
  "/todos/:id",
  checksExistsUserAccount,
  checksTodoExists,
  deleteTodoUC
);

module.exports = {
  app,
  users,
  checksExistsUserAccount,
  checksCreateTodosUserAvailability,
  checksTodoExists,
  findUserById,
};
