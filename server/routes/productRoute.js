const express = require("express")
const { getAllProduct, singleProduct, CreateProduct } = require("../controllers/productCtrl")


const router = express.Router()

router.post('/create', CreateProduct)
router.get("/all", getAllProduct)
router.get("/single/:id", singleProduct)

module.exports = router
