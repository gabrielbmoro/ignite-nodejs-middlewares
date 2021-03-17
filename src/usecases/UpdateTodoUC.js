class UpdateTodoUC {
  execute(request, response) {
    const { title, deadline } = request.body;
    const { todo } = request;

    todo.title = title;
    todo.deadline = new Date(deadline);

    return response.json(todo);
  }
}

module.exports = new UpdateTodoUC();
