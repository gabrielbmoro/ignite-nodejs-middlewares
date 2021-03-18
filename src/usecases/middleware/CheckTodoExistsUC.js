const ValidateUUIDv4 = require("../../helper/ValidateUUIDv4");
const UsersRepository = require("../../repository/UsersRepository");

class CheckTodoExistsUC {
  execute(request, response, next) {
    const todoId = request.params.id;
    const { username } = request.headers;

    const isIdValid = ValidateUUIDv4.isValid(todoId);
    if (!isIdValid) {
      return response.status(400).json({ error: "UUID is not valid" });
    }

    const user = UsersRepository.getUser(username);
    if (user) {
      const todo = user.todos.find((todo) => todo.id == todoId);
      if (todo) {
        request.user = user;
        request.todo = todo;
        next();
      } else {
        return response.status(404).json({ error: "Todo doesn't exist" });
      }
    } else {
      return response.status(404).json({ error: "User doesn't exist" });
    }
  }
}

module.exports = new CheckTodoExistsUC();
