const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishedYear: Number,
  genre: String,
});

const books = mongoose.model("Books", bookSchema);

router.post('/bookData', async (req, res) => {
  try {
    const allBooks = await books.find(); // Query the database
    if (!allBooks || allBooks.length === 0) {
      return res.status(404).send("No books found");
    }
    res.status(200).send(allBooks);
  } catch (error) {
    console.error("Error fetching books:", error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
