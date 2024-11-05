import { fn, Sequelize } from "sequelize";
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
      const user = await database.Users.findOne({
        where: {
          id,
        },
        include: [
          {
            model: database.Books,
            as: "presents",
            attributes: ["name", "author", "id"],
          },
          {
            model: database.Returns,
            as: "past",
            attributes: ["score"],
            include: [
              {
                model: database.Books,
                attributes: ["name", "author", "id"],
                as: "Book",
              },
            ],
          },
        ],
      });
      if (user) {
        const formattedUser = {
          ...user.toJSON(),
          past: user.past.map((item) => ({
            score: item.score,
            name: item.Book.name,
            author: item.Book.author,
            id: item.Book.id,
          })),
        };
        return formattedUser;
      }
      return user;
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
