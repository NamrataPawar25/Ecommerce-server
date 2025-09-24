const express= require("express")
const brandController= require("../controllers/brandController")

const router= express.Router();

router.get("/getAllBrand", brandController.getAllBrand) ;
router.get("/getBrandById/:ID", brandController.getBrandById) ;
router.post("/createBrand",brandController.createBrand);
router.delete("/deleteBrand/:ID",brandController.deleteBrand);
router.put("/updateBrand/:ID",brandController.updateBrand);


module.exports = router;





