const category = require("../models/categoryModel")

const getAllCategories = async(req, res) => {
    try {
        const categories= await category.findAll()
        res.status(200).send({categories: categories, success: true})
    } catch (error) {
        res.status(500).send({msg: "server eror"})
    }
};

function getCategoryById(req, res) {
  console.log(req.params.ID);
  const ID = req.params.ID;
  try {
        
    } catch (error) {
        res.status(500).send({msg: "server eror"})
    }
}

async function createCategory(req, res) {
    console.log(req.body);
    try {
        const newCategory= await category.create(req.body)
        if(newCategory){
        res.status(200).send({msg: "category created successfully", success: true})
        }else{
        res.status(400).send({msg: "Error while creating category", success: false})
        }
    } catch (error) {
        res.status(500).send({msg: "server eror"})
    } 
}

function deleteCategory(req, res) {
  console.log(req.params.ID);
  const ID = parseInt(req.params.ID);
  try {
        
    } catch (error) {
        res.status(500).send({msg: "server eror"})
    }
}

function updateCategory(req, res) {
  console.log(req.params.ID);
  const ID = req.params.ID;
  try {
        
    } catch (error) {
        res.status(500).send({msg: "server eror"})
    }
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
  updateCategory,
};
