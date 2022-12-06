import { Schema, mongoose } from "mongoose"

const productCollections = "products"
const productSchema = new Schema({
    title: {type: String, required: true, max: 70, min: 3},
    description: {type: String, required: true, max: 150, min: 3},
    code: {type: String, required: true, max: 10, min: 3},
    thumbnail: {type: String, required: true, max: 300, min: 3},
    price: {type: Number, required: true},
    stock: {type: Number, required: true, default: 1},
    timestamp: {type: String, required: true},
}, {
    virtuals: true
})

export const productModel = {productCollections, productSchema}

export const productos = new mongoose.model(productCollections, productSchema)