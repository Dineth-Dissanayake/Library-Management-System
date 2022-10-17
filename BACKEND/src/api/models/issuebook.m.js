import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const issuebookSchema = new Schema({
  studentId: {
    type: String,
    required: [true, "Student ID required⚠️"],
  },

  bookId: {
    type: String,
    required: [true, "BOOK ID Name required⚠️"],

  },
  date: {
    type: String,
    required: [true, "DATE required⚠️"],

  }
});

module.exports = mongoose.model("IssuebookSchema", issuebookSchema);
