import {MongoDBContainer} from "../../Containers/index.js"
import {productModel} from "../../models/ProductModel.js"
export class ProductsMongo extends MongoDBContainer {
    constructor() {
        super({
            collection: productModel.productCollections,
            schema: productModel.productSchema
        })
    }
}