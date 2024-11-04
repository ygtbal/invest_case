import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.get("/", UserController.getAllUsers);
router.post("/add", UserController.addUser);

export default router;
