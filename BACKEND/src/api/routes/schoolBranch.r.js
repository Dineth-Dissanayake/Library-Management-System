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