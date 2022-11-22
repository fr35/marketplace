import {MongoDBContainer} from "../../Containers/index.js"
import {cartModel} from "../../models/CartModel"

export class CartsMongo extends MongoDBContainer {
    constructor() {
        super({
            collection: cartModel.cartCollections,
            schema: cartModel.cartSchema
        })
    }
}
