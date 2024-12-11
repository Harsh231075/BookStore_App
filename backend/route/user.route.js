import express from "express";
import { signup, login } from "../controller/user.controller.js";
import { bookCreated } from "../controller/user.Authrize.js"
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/create", bookCreated);

export default router;