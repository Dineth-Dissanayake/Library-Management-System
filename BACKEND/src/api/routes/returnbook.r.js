import express from "express";

const Returnbook= require("../models/returnbook.m");
const router = express.Router();

//Return BOOK
router.post('/returnbook/add', (req,res)=>{
    let newReturnbook = new Returnbook(req.body);

    newReturnbook.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Return Book Details Added successfully🆗"
        });
    });
});

//GET Returnbook list
router.get('/returnbook', (req,res) => {
    Returnbook.find().exec((err,Returnbook) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingReturnbook:Returnbook
        });
    });
});

//GET SPECIFIC Return book details
router.get("/returnbook/:id", (req,res) => {
    let bookId = req.params.id;

    Returnbook.findById(bookId,(err,Returnbook) => {
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            Returnbook
        });
    });
});

//UPDATE Return book details
router.put('/returnbook/update/:id',(req,res) => {
    Returnbook.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,Returnbook) => {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Return Book Details Updated Successfully!🆗"
            });
        }
    );
});

//DELETE Return Book Details
router.delete('/returnbook/:id', (req,res) => {
    Returnbook.findByIdAndRemove(req.params.id).exec((err,deletedReturnbook) => {
        if(err) return res.status(400).json({
            message:"Return Book Details Delete Unsuccessful!👎",err
        });
        return res.json({
            message:"Return Book Details Delete Successful!🆗",deletedReturnbook
        });
    });
});

module.exports = router;
