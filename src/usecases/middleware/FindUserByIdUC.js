const UsersRepository = require("../../repository/UsersRepository");

class FindUserByIdUC {
  execute(request, response, next) {
    const id = request.params.id;
    const user = UsersRepository.findUserById(id);
    if (!user) {
      return response.status(404).json({ error: "User doesn't exist" });
    }

    request.user = user;

    next();
  }
}

module.exports = new FindUserByIdUC();
