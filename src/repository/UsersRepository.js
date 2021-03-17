class UsersRepository {
  users = [];

  getUser(username) {
    return this.users.find((user) => user.username == username);
  }

  findUserById(userId) {
    const user = this.users.find((user) => user.id == userId);
    return user;
  }

  doesUsernameAlreadyExist(username) {
    return this.users.some((user) => user.username === username);
  }

  insert(user) {
    this.users.push(user);
  }

  update(user) {
    const amountOfUsers = this.users.length;
    let i = 0;

    while (i < amountOfUsers) {
      if (this.users[i].id == user.id) {
        this.users[i] = user;
        return this.users[i];
      }
      i++;
    }
  }
}

const usersRepository = new UsersRepository();

module.exports = usersRepository;
