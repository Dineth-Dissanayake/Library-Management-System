import express from "express";

const Book = require("../models/book.m");
const router = express.Router();

//ADD NEW BOOK
router.post('/book/add', (req,res)=>{
    let newBook = new Book(req.body);

    newBook.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Book added successfully🆗"
        });
    });
});


//GET BOOKS
router.get('/books', (req,res) => {
    Book.find().exec((err,Book) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingBook:Book
        });
    });
});


//GET SPECIFIC BOOK
router.get("/book/:id", (req,res) => {
    let bookId = req.params.id;

    Book.findById(bookId,(err,book) => {
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            book
        });
    });
});


//UPDATE BOOK
router.put('/book/update/:id',(req,res) => {
    Book.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,Book) => {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Book Updated Successfully!🆗"
            });
        }
    );
});


//DELETE BOOK
router.delete('/book/:id', (req,res) => {
    Book.findByIdAndRemove(req.params.id).exec((err,deletedBook) => {
        if(err) return res.status(400).json({
            message:"Book Delete Unsuccessful!👎",err
        });
        return res.json({
            message:"Book Delete Successful!🆗",deletedBook
        });
    });
});


module.exports = router;