const Product = require("../../db/models/Product")
let products = require("../../data")

exports.getProduct = async (req,res)=>{
   try {
      const products = await Product.find()
       res.json(products)
   } catch (error){
       res.status(500).json({message:error.message})
   }
}

exports.fetchProduct = async (req,res)=>{
    try {
       const products = await Product.find({}).select("name description price color")
        res.json(products)
    } catch (error){
        res.status(500).json({message:error.message})
    }
 }
 

exports.getDetail = (req,res)=>{
    const {productsId} = req.params
    const productsOne= products.find((e)=>e.id===+productsId)
    res.status(200).json(productsOne)
}

exports.createProduct = async (req,res) => {
  try { 
  const newProduct = await Product.create(req.body)
        res.status(201).json(newProduct)
  }  catch (error) {
      res.status(500).json({message:error.message})
  }
}




exports.deleteProduct = async (req,res) => {
    try {
        const {productId} = req.params
        const foundProduct = await Product.findByIdAndDelete ({_id: productId})
        if (foundProduct){
            res.status(204).end()
        } else {
    res.status(404).json({message:"not found"})
        }

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.updateProduct = async (req, res) => {
    try{
        const {productId} = req.params
        const product = await Product.findByIdAndUpdate({_id: productId}, req.body, {
            new: true,
            runValidators:true
        })
        if (product) res.status(200).json(product)
        else res.status(404).json({message:"not found"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
