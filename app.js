const express = require("express");
const app = express();
const productRoutes = require("./apis/products/routes")
const connectDb = require("./db/database");

app.use(express.json())

app.use((req,res,next) => {
    console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.path} `)
    next()
}
)

app.use("/api/products", productRoutes)

app.use((req,res)=> {
    res.status(404).json({message:"Path Not Found"})
}
)
app.use((error, req,res, next)=> {
    res.status(error.status || 500).json({message:error.message || "Something's not right..."})
}
)

connectDb();
app.listen(8000)