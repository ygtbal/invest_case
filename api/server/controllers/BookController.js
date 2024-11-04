import BookService from "../services/BookService";
import Util from "../Utils/Utils";

const util = new Util();

class BookController {
  static async getAllBooks(req, res) {
    try {
      const allBooks = await BookService.getAllBooks();
      util.setSuccess(200, "Books retrieved", allBooks);
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
  static async addBook(req, res) {
    try {
      const newBook = req.body;
      const createdBook = await BookService.addBook(newBook);
      util.setSuccess(201, "Book Added!", createdBook);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

export default BookController;
