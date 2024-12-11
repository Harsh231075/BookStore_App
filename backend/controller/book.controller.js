import Book from "../model/book.model.js";
import UserAuth from '../model/authrize.model.js';

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);

  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};

export const userBook = async (req, res) => {
  try {
    const book = await UserAuth.find();
    res.status(200).json(book);

  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};