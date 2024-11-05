import { Router } from "express";
import BookController from "../controllers/BookController";

const router = Router();

router.get("/", BookController.getAllBooks);
router.post("/add", BookController.addBook);
router.put("/borrow", BookController.borrowBook);
router.post("/return", BookController.returnBook);

export default router;
