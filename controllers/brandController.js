const brand = require("../models/brandModel")


async function getAllBrand(req, res) {
  try {
        const brands= await brand.findAll()
        res.status(200).send({brands: brands, success: true})
    } catch (error) {
        res.status(500).send({msg: "server eror"})
    }
}

function getBrandById(req, res) {
  console.log(req.params.ID);
  const ID = req.params.ID;
  try {
        
    } catch (error) {
        res.status(500).send({msg: "server eror"})
    }
}
async function createBrand(req, res) {
    console.log(req.body);
    try {
        const newBrand= await brand.create(req.body)
        if(newBrand){
        res.status(200).send({msg: "brand created successfully", success: true})
        }else{
        res.status(400).send({msg: "Error while creating category", success: false})
        }
    } catch (error) {
        res.status(500).send({msg: "server eror"})
    } 
}

function deleteBrand(req, res) {
  const ID = req.params.ID;

  
}
function updateBrand(req, res) {
  console.log(req.params.ID);
  const ID = req.params.ID;
  
}
module.exports = {
  getAllBrand,
  getBrandById,
  createBrand,
  deleteBrand,
  updateBrand,
};
