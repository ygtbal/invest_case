import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.get("/", UserController.getAllUsers);
router.post("/add", UserController.addUser);
router.get("/:id", UserController.getUser);

export default router;
