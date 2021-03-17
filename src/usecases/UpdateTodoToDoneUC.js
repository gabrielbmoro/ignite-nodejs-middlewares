class UpdateTodoToDoneUC {
  execute(request, response) {
    const { todo } = request;

    todo.done = true;

    return response.json(todo);
  }
}

module.exports = new UpdateTodoToDoneUC();
