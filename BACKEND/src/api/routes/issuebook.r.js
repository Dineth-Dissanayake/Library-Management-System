import express from "express";

const Issuebook= require("../models/issuebook.m");
const router = express.Router();

//Issue NEW BOOK
router.post('/issuebook/add', (req,res)=>{
    let newIssuebook = new Issuebook(req.body);

    newIssuebook.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Issued Book Details Added successfully🆗"
        });
    });
});

//GET Issuebook list
router.get('/issuebook', (req,res) => {
    Issuebook.find().exec((err,Issuebook) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingIssuebook:Issuebook
        });
    });
});

//GET SPECIFIC Issue book details
router.get("/issuebook/:id", (req,res) => {
    let studentId = req.params.id;

    Issuebook.findById(studentId,(err,Issuebook) => {
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            Issuebook
        });
    });
});

//UPDATE Issue book details
router.put('/issuebook/update/:id',(req,res) => {
    Issuebook.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,Issuebook) => {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Issue Book Details Updated Successfully!🆗"
            });
        }
    );
});

//DELETE Issue Book Details
router.delete('/issuebook/:id', (req,res) => {
    Issuebook.findByIdAndRemove(req.params.id).exec((err,deletedIssuebook) => {
        if(err) return res.status(400).json({
            message:"Issue Book Details Delete Unsuccessful!👎",err
        });
        return res.json({
            message:"Issue Book Details Delete Successful!🆗",deletedIssuebook
        });
    });
});

module.exports = router;
