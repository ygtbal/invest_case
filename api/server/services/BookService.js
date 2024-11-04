import database from "../src/models";

class BookService {
  static async getAllBooks() {
    try {
      return await database.Books.findAll();
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
}

export default BookService;
