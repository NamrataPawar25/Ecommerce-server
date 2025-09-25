const product = require("../models/productModel");


const getAllProducts = async(req, res) => {
    try {
        const products= await product.findAll()
        res.status(200).send({products: products, success: true})
    } catch (error) {
        res.status(500).send({msg: "server eror"})
    }
};

function getProductById(req, res) {
  console.log(req.params.ID);
  const ID = req.params.ID;
  
}

async function createProduct(req, res) {
  console.log(req.body);
    try {
        const newProduct= await product.create(req.body)
        if(newProduct){
        res.status(200).send({msg: "product created successfully", success: true})
        }else{
        res.status(400).send({msg: "Error while creating product", success: false})
        }
    } catch (error) {
        res.status(500).send({msg: "server eror"})
    } 
}

function deleteProduct(req, res) {
  console.log(req.params.ID);
  const ID = req.params.ID;
 
}

function updateProduct(req, res) {
  console.log(req.params.ID);
  const ID = req.params.ID;
  
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
