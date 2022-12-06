import { FirebaseContainer } from "../../Containers/FirebaseContainer.js"

export class ProductsFirebase extends FirebaseContainer {
    constructor() {
        super ({
            collection: 'products'
        })
    }
}