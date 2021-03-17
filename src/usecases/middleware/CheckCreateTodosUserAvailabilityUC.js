class ChecksCreateTodosUserAvailabilityUC {
  execute(request, response, next) {
    const { user } = request;
    if (!user.pro && user.todos.length >= 10) {
      return response
        .status(403)
        .json({ error: "User doesn't have limit to todo" });
    }

    next();
  }
}

module.exports = new ChecksCreateTodosUserAvailabilityUC();
