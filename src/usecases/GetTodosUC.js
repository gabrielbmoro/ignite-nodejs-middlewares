class GetTodosUC {
  execute(request, response) {
    const { user } = request;

    return response.json(user.todos);
  }
}

module.exports = new GetTodosUC();
