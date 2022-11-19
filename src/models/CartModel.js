import { Schema } from "mongoose"

const cartsCollections = "products"
const cartSchema = new Schema({
    timestamp: {type: String, required: true},
    products: [{type: Schema.Types.ObjectId, ref: "products"}]
}, {
    virtuals: true
})
productSchema.set("toJSON", {
    transform: (_, response) => {
        response.id = response._id
        delete response._id
        return response
    }
})

export const cartModel = {cartsCollections, cartSchema}