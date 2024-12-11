import UserAuth from "../model/authrize.model.js";

export const bookCreated = async (req, res) => {
  try {
    console.log(req.body);
    const { name, price, title, categeory, image } = req.body;
    console.log(categeory);
    const bookSotred = new UserAuth({
      name,
      price,
      title,
      categeory,
      image
    });
    await bookSotred.save();
    res.status(201).json({
      message: "Book Stored successfully"
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};