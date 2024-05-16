const product = require("../models/product")

//create product
const CreateProduct = async (req, res) => {
    try {
        //first we have to check wheather there is product or not in the database.
        const checkProduct = await product.findOne({ ProductName: req.body.ProductName })
        if (checkProduct) {
            //401 - we are telleing that there is error
            //503 - node.js(server )gives error
            //200 -  all ok
            //404 - page not found
            return res.status(401).json({ errorMessage: "Product already exist" })
        }
        //if product doesnt exist in database we create the product 
        const addProduct = await product.create({
            ProductName: req.body.ProductName,
            Price: req.body.Price,
            Discount: req.body.Discount,
            outofStock: req.body.outofStock,
            img: req.body.img
        })
        res.status(200).json({ message: "Product Created" })
    }
    catch (error) {
        //503 - internal server error status i.e  nodejs gives error
        res.status(503).json({ errorMessage: "Sometheing went Wrong" })
    }
}


//get all product
const getAllProduct = async (req, res) => {
    try {
        const getall = await product.find({})
        res.status(200).json({ message: "success", data: getall })
    }
    catch(error){
        res.status(503).json({errorMessage:"Something went wrong"})
    }
}

//single product
const singleProduct=async(req,res)=>{
    try{
        const single=await product.findById({_id:req.params.id})
        res.status(200).json({message:"success",data:single})
    }catch(error){
        res.status(503).json({errorMessage:"Something went wrong"})
    }
}
module.exports={
    CreateProduct,
    getAllProduct,
    singleProduct
}