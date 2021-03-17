const { v4: uuidv4 } = require("uuid");
const UsersRepository = require("../repository/UsersRepository");

class CreateUserUC {
  execute(request, response) {
    const { name, username } = request.body;

    const usernameAlreadyExists = UsersRepository.doesUsernameAlreadyExist(
      username
    );

    if (usernameAlreadyExists) {
      return response.status(400).json({ error: "Username already exists" });
    }

    const user = {
      id: uuidv4(),
      name,
      username,
      pro: false,
      todos: [],
    };

    UsersRepository.insert(user);

    return response.status(201).json(user);
  }
}

module.exports = new CreateUserUC();
