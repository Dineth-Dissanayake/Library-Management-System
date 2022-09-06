import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookId: {
    type: String,
    required: [true, "Book ID required⚠️"],
  },
  title: {
    type: String,
    required: [true, "Book Title required⚠️"],
  },
  autherName: {
    type: String,
    required: [true, "Author's Name required⚠️"],
  },
  bCategory: {
    type: String,
    required: [true, "Book Category required⚠️"],
  },
  count: {
    type: Number,
    required: [true, "Book Count required⚠️"],
  },
  description: {
    type: String,
    required: false,
  }
});


module.exports = mongoose.model("BookSchema", bookSchema);