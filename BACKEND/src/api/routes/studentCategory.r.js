import express from "express";

const StudentCategory = require("../models/studentCategory.m");
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
            existingStudentCategory: StudentCategory
        });
    });
});

//Edit school branch
router.put('/studentCategory/edit/:id', (req,res) => {
    StudentCategory.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,StudentCategory) => {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success: "Updated successfully!"
            });
        }
    );
});

//Delete post
router.delete('/studentCategory/delete/:id', (req,res) => {
    StudentCategory.findByIdAndRemove(req.params.id).exec((err,deletedStudentCategory) => {
        if(err) return res.status(400).json({
            message: "Delete unsuccessful!",err
        });
        return res.json({
            message: "Deleted successfully!", deletedStudentCategory
        });
    });
});

//Get specific student category
router.get('/studentCategory/:id', (req,res) => {
    let studentCategoryId = req.params.id;

    StudentCategory.findById(studentCategoryId,(err,StudentCategory) => {
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            StudentCategory
        });
    });
});

module.exports = router;