import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const returnbookSchema = new Schema({
  bookId: {
    type: String,
    required: [true, "BOOK ID Name required⚠️"],

  },
  date: {
    type: String,
    required: [true, "DATE required⚠️"],

  }
});

module.exports = mongoose.model("ReturnbookSchema", returnbookSchema);
