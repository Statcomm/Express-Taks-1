const express = require("express")
const router = express.Router()

const { getProduct, getDetail, createProduct, deleteProduct, updateProduct} = require("./controllers")

router.get("/", getProduct)
router.get("/:productId", getDetail)
router.post("/", createProduct)
router.delete("/:productId", deleteProduct)
router.put("/:productId", updateProduct)

module.exports = router
