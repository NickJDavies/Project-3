const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  settings: String,
  statistics: { type: String, }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
