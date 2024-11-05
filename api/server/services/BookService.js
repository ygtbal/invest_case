import { Sequelize } from "sequelize";
import { sequelize, database } from "../src/models";

class BookService {
  static async getAllBooks() {
    try {
      return await database.Books.findAll({
        attributes: { exclude: ["user_id"] },
      });
    } catch (error) {
      throw error;
    }
  }
  static async addBook(newBook) {
    try {
      return await database.Books.create(newBook);
    } catch (error) {
      throw error;
    }
  }
  static async getBook(id) {
    try {
      return await database.Books.findOne({
        where: {
          id,
        },
        attributes: [
          "id",
          "name",
          "author",
          [
            Sequelize.fn(
              "ROUND",
              Sequelize.fn("AVG", Sequelize.col("Returns.score")),
              2
            ),
            "average",
          ],
        ],
        include: {
          model: database.Returns,
          attributes: [],
        },
        group: ["Books.id"],
      });
    } catch (error) {
      throw error;
    }
  }
  static async borrowBook(id, user_id) {
    try {
      const result = await database.Books.update(
        { user_id },
        { where: { user_id: null, id } }
      );
      return result[0];
    } catch (error) {
      throw error;
    }
  }
  static async returnBook(book_id, user_id, score) {
    try {
      return await sequelize.transaction(async (t) => {
        const update = await database.Books.update(
          {
            user_id: null,
          },
          {
            where: {
              id: book_id,
              user_id,
            },
            transaction: t,
          }
        );
        if (update[0]) {
          const user = await database.Returns.create(
            {
              user_id,
              book_id,
              score,
            },
            { transaction: t }
          );
          return user;
        }
      });
    } catch (error) {
      throw error;
    }
  }
}

export default BookService;
