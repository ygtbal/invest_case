import BorrowService from "../services/BorrowService";
import Util from "../Utils/Utils";

const util = new Util();

class BorrowController {
  static async getBorrowers(req, res) {
    try {
      const allBorrowers = await BorrowService.getBorrowers();
      util.setSuccess(200, "Borrowers retrieved", allBorrowers);
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
  static async borrowBook(req, res) {
    try {
      const newBorrower = req.body;
      const createdBorrower = await BorrowService.borrowBook(newBorrower);
      util.setSuccess(201, "Book borrowed", createdBorrower);
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
  static async returnBook(req, res) {
    try {
      const { user_id, book_id, score } = req.body;
      const returnBook = await BorrowService.returnBook(
        user_id,
        book_id,
        score
      );
      if (returnBook) {
        util.setSuccess(200, "Book returned");
        return util.send(res);
      }
      util.setError(200, "No borrowed book is founded");
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default BorrowController;
