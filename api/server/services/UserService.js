import { database } from "../src/models";

class UserService {
  static async getAllUsers() {
    try {
      return await database.Users.findAll();
    } catch (error) {
      throw error;
    }
  }
  static async getUser(id) {
    try {
      return await database.Users.findOne({
        where: {
          id,
        },
        attributes: ["id", "name", "surname"],
      });
    } catch (error) {
      throw error;
    }
  }
  static async addUser(newUser) {
    try {
      return await database.Users.create(newUser);
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
