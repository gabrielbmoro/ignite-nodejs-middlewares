const UsersRepository = require("../../repository/UsersRepository");

class CheckExistsUserAccountUC {
  execute(request, response, next) {
    const { username } = request.headers;
    const user = UsersRepository.getUser(username);
    if (!user) {
      return response.status(404).json({ error: "User doesn't exist" });
    }
    request.user = user;
    next();
  }
}

module.exports = new CheckExistsUserAccountUC();
