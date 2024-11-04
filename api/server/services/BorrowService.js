import database from "../src/models";

class BorrowService {
  static async getBorrowers() {
    try {
      return await database.Borrowers.findAll();
    } catch (error) {
      throw error;
    }
  }
  static async borrowBook(borrow) {
    try {
      return await database.Borrowers.create(borrow);
    } catch (error) {
      throw error;
    }
  }
  static async returnBook(user_id, book_id, score) {
    try {
      const update = await database.Borrowers.update(
        {
          return: true,
          score,
        },
        {
          where: {
            user_id,
            book_id,
            return: false,
          },
        }
      );
      return update[0];
    } catch (error) {
      throw error;
    }
  }
}

export default BorrowService;
