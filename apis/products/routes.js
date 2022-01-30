const express = require("express")
const router = express.Router()

const { getProduct, getDetail, createProduct, deleteProduct} = require("./controllers")

router.get("/", getProduct)
router.get("/:productId", getDetail)
router.post("/", createProduct)
router.delete("/:productId", deleteProduct)

module.exports = router
