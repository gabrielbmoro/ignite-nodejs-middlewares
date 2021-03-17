const { v4: uuidv4 } = require("uuid");

class CreateTodoUC {
  execute(request, response) {
    const { title, deadline } = request.body;
    const { user } = request;

    const newTodo = {
      id: uuidv4(),
      title,
      deadline: new Date(deadline),
      done: false,
      created_at: new Date(),
    };

    user.todos.push(newTodo);

    return response.status(201).json(newTodo);
  }
}

module.exports = new CreateTodoUC();
