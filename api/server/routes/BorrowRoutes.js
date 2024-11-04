import { Router } from "express";
import BorrowController from "../controllers/BorrowController";

const router = Router();

router.get("/", BorrowController.getBorrowers);
router.post("/", BorrowController.borrowBook);
router.put("/return", BorrowController.returnBook);

export default router;
