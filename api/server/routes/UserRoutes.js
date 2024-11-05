import { Router } from "express";
import UserController from "../controllers/UserController";
import { validateRequest } from "../middlewares";

const router = Router();

router.get("/", UserController.getAllUsers);
router.post("/", validateRequest, UserController.addUser);
router.get("/:id", UserController.getUser);

export default router;
