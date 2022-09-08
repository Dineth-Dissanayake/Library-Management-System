import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categoryId: {
    type: String,
    required: [true, "Category ID required⚠️"],
  },

  Category: {
    type: String,
    required: [true, "Category Name required⚠️"],

  }
});

module.exports = mongoose.model("CategorySchema", categorySchema);
