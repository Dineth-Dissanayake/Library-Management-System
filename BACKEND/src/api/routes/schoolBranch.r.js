import express from "express";

const SchoolBranch = require("../models/schoolBranch.m");
const router = express.Router();

//Add new school branch
router.post('/schoolBranch/add', (req,res)=>{
    let newSchoolBranch = new SchoolBranch(req.body);

    newSchoolBranch.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"School branch added successfully🆗"
        });
    });
});

//Get all school branches
router.get('/schoolBranches', (req,res) => {
    SchoolBranch.find().exec((err,SchoolBranch) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingSchoolBranch:SchoolBranch
        });
    });
});

//Edit school branch 
router.put('/schoolBranch/edit/:id', (req,res) => {
    SchoolBranch.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,SchoolBranch) => {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success: "Updated successfully!"
            });
        }
    );
});

//Delete school branch
router.delete('/schoolBranch/delete/:id', (req,res) => {
    SchoolBranch.findByIdAndRemove(req.params.id).exec((err,deletedSchoolBranch) => {
        if(err) return res.status(400).json({
            message: "Delete unsuccessful",err
        });
        return res.json({
            message: "Deleted successfully!", deletedSchoolBranch
        });
    });
});

//Get a specific branch
router.get('/schoolBranch/:id', (req,res) => {
    let schoolBranchId = req.params.id;

    SchoolBranch.findById(schoolBranchId,(err,SchoolBranch) => {
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            SchoolBranch
        });
    });
});

module.exports = router;