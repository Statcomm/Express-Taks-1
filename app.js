const express = require("express");
const app = express();
const productRoutes = require("./apis/products/routes")
const connectDb = require("./db/database");

app.use(express.json())
app.use("/api/products", productRoutes)

connectDb();
app.listen(8000)