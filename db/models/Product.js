const mongoose = require("mongoose")
const mongoosSlugPlugin=require("mongoose-slug-plugin")

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String},
    description: {type: String},
    color: {type: String},
    quantity: {type: Number, min: 0},
    price:{type: Number, default: 1.0}
})

module.exports = mongoose.model("Product", ProductSchema);