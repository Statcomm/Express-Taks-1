const Product = require("../../db/models/Product")
let products = require("../../data")

exports.getProduct = async (req,res, next)=>{
   try {
      const products = await Product.find()
       res.json(products)
   } catch (error){
    next(error)
   }
}

exports.fetchProduct = async (req,res, next)=>{
    try {
       const products = await Product.find({}).select("name description price color")
        res.json(products)
    } catch (error){
        next(error)
    }
 }
 

exports.getDetail = (req,res, next)=>{
    const {productsId} = req.params
    const productsOne= products.find((e)=>e.id===+productsId)
    res.status(200).json(productsOne)
}

exports.createProduct = async (req,res, next) => {
  try { 
  const newProduct = await Product.create(req.body)
        res.status(201).json(newProduct)
  }  catch (error) {
    next(error)
  }
}




exports.deleteProduct = async (req,res, next) => {
    try {
        const {productId} = req.params
        const foundProduct = await Product.findByIdAndDelete ({_id: productId})
        if (foundProduct){
            res.status(204).end()
        } else {
            next({status : 404, message: "Product not found"})
        }

    } catch (error) {
        next(error)
    }
}

exports.updateProduct = async (req, res, next) => {
    try{
        const {productId} = req.params
        const product = await Product.findByIdAndUpdate({_id: productId}, req.body, {
            new: true,
            runValidators:true
        })
        if (product) res.status(200).json(product)
        else next({status : 404, message: "Product not found"})
    } catch (error) {
        next(error)
    }
}
