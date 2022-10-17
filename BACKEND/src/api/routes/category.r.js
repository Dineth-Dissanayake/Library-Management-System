import express from "express";

const Category= require("../models/category.m");
const router = express.Router();

//ADD NEW BOOK Category
router.post('/category/add', (req,res)=>{
    let newCategory = new Category(req.body);

    newCategory.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"New Category added successfully🆗"
        });
    });
});

//GET Category List
router.get('/category', (req,res) => {
    Category.find().exec((err,Category) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingCategory:Category
        });
    });
});

//GET SPECIFIC Category
router.get("/category/:id", (req,res) => {
    let categoryId = req.params.id;

    Category.findById(categoryId,(err,category) => {
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            category
        });
    });
});

//UPDATE Category
router.put('/category/update/:id',(req,res) => {
    Category.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,Category) => {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Category Updated Successfully!🆗"
            });
        }
    );
});

//DELETE Category
router.delete('/category/:id', (req,res) => {
    Category.findByIdAndRemove(req.params.id).exec((err,deletedCategory) => {
        if(err) return res.status(400).json({
            message:"Category Delete Unsuccessful!👎",err
        });
        return res.json({
            message:"Category Delete Successful!🆗",deletedCategory
        });
    });
});

module.exports = router;
