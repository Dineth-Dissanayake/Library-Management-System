import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schoolBranchSchema = new Schema({
    branchName: {
        type: String,
        required: [true, "Branch name is required⚠️"],
    }
});

module.exports = mongoose.model("SchoolBranches", schoolBranchSchema);