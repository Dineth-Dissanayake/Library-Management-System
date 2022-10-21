import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Fullname is required⚠️"],
  },
  regNumber: {
    type: String,
    max:10,
    required: [true, "Registration no is Rerequired⚠️"],
  },
  NIC: {
    type: String,
    max:12,
    required: [true, "NIC is required⚠️"],
  },
  faculty: {
    type: String,
    required: [true, "Faculty is required⚠️"],
  },
  semester: {
    type: String,
    required: [true, "Semester is required⚠️"],
  },
  
  contactNumber: {
    type: Number,
    max:9999999999,
    required: [true, "Contact details are required⚠️"],
  },
  address: {
    type: String,
    required: [true, "Permant addrress is required⚠️"],
  }
});


module.exports = mongoose.model("StudentSchema", studentSchema);