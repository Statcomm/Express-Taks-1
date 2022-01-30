const express = require("express");
const app = express();
const products = require("./data")


app.get("/api/products",(req,res)=>{
    res.json(products)
})
app.listen(8000)