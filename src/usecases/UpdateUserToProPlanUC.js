const UsersRepository = require("../repository/UsersRepository");

class UpdateUserToProPlanUC {
  execute(request, response) {
    const { user } = request;

    if (user.pro) {
      return response
        .status(400)
        .json({ error: "Pro plan is already activated." });
    }

    user.pro = true;

    const userUpdated = UsersRepository.update(user);

    return response.json(userUpdated);
  }
}

module.exports = new UpdateUserToProPlanUC();
