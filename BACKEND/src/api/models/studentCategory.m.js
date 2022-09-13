import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const studentCategorySchema = new Schema({
    categoryName: {
        type: String,
        required: [true, "Student category required⚠️"],
    },

    maxAllowed: {
        type:Number,
        required: [true, "Maximum allowed number is required⚠️"],
    }
});

module.exports = mongoose.model("StudentCategories", studentCategorySchema);