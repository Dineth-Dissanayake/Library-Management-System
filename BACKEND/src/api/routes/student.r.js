import express from "express";

const Student = require("../models/student.m");
const router = express.Router();

//ADD NEW STUDENT
router.post('/student/add', (req, res) => {
    let newStudent = new Student(req.body);

    newStudent.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Student added successfully🆗"
        });
    });
});


//GET STUDENTS
router.get('/students', (req, res) => {
    Student.find().exec((err, Student) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingStudent: Student
        });
    });
});


//GET SPECIFIC STUDENT
router.get("/student/:id", (req, res) => {
    let studentId = req.params.id;

    Student.findById(studentId, (err, student) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }

        return res.status(200).json({
            success: true,
            student
        });
    });
});


//UPDATE STUDENT
router.put('/student/update/:id', (req, res) => {
    Student.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, Student) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            return res.status(200).json({
                success: "Student Updated Successfully!🆗"
            });
        }
    );
});


//DELETE STUDENT
router.delete('/student/:id', (req, res) => {
    Student.findByIdAndRemove(req.params.id).exec((err, deletedStudent) => {
        if (err) return res.status(400).json({
            message: "Student Delete Unsuccessful!👎", err
        });
        return res.json({
            message: "Student Delete Successful!🆗", deletedStudent
        });
    });
});


module.exports = router;
