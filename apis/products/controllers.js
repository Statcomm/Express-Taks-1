let products = require("../../products/data")

exports.getProduct = (req,res)=>{
    res.json(products)
}

exports.getDetail = (req,res)=>{
    const {productsId} = req.params
    const productsOne= products.find((e)=>e.id===+productsId)
    res.status(200).json(productsOne)
}

exports.createProduct = (req,res) => {
    const id = products.length+1;
    const newProduct = {id: id, ...req.body}
    products.push(newProduct)
    res.status(201).json({message:"added"})
}

exports.deleteProduct = (req,res) => {
    const {productId} = req.params
    const productOne= products.find((e)=>e.id===+productId)
    if (productOne){
        products = products.filter((e)=> e.id != productId)
        res.status(204).end()
    } else {
res.status(404).json({message:"not found"})
    }
}

module.exports = router
