import express from "express";

const StudentCategory = require("../models/book.m");
const router = express.Router();

//Add new student category
router.post('/studentCategory/add', (req,res)=>{
    let newStudentCategory = new StudentCategory(req.body);

    newStudentCategory.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Student category added successfully🆗"
        });
    });
});

//Get all student categories
router.get('/studentCategories', (req,res) => {
    StudentCategory.find().exec((err,StudentCategory) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingStudentCategory:StudentCategory
        });
    });
});

