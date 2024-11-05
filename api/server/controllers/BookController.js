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
  static async getBook(req, res) {
    try {
      const book = await BookService.getBook(req.params.id);
      if (book) {
        util.setSuccess(200, "Book received", book);
        return util.send(res);
      }
      util.setError(404, "Book not found");
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
  static async borrowBook(req, res) {
    try {
      const { book_id, user_id } = req.body;
      const updatedBook = await BookService.borrowBook(book_id, user_id);
      if (updatedBook) {
        util.setSuccess(200, "Book Borrowed!");
        return util.send(res);
      }
      util.setError(400, `You can not borrow this book`);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
  static async returnBook(req, res) {
    try {
      const { book_id, user_id, score } = req.body;
      const result = await BookService.returnBook(book_id, user_id, score);
      if (result) {
        util.setSuccess(200, "Book return successful");
        return util.send(res);
      }
      util.setError(400, "Be sure that this book is borrowed by you");
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

export default BookController;
