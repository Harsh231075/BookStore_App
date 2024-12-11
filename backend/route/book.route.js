import express from "express";
import { getBook, userBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.get('/userbook', userBook)

export default router;