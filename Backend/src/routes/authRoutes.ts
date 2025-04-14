import express from "express";
import { register, login } from "../controllers/usersController";
import {
  getLoadUnloadController,
  deleteLoadUnloadController,
  postLoadUnloadController,
  updateLoadUnloadController,
} from "../controllers/loadUnLoadController";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/load-unload", getLoadUnloadController);
router.post("/load-unload", postLoadUnloadController);
router.patch("/load-unload/:id", updateLoadUnloadController);
router.delete("/load-unload/:id", deleteLoadUnloadController);

export default router;
