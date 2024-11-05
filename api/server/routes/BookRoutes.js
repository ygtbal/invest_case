import { Router } from "express";
import BookController from "../controllers/BookController";
import { validateRequest } from "../middlewares";

const router = Router();

router.get("/", BookController.getAllBooks);
router.get("/:id", BookController.getBook);
router.post("/", validateRequest, BookController.addBook);
router.put("/borrow", validateRequest, BookController.borrowBook);
router.post("/return", validateRequest, BookController.returnBook);

export default router;
