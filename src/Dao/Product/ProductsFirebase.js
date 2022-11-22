import { FirebaseContainer } from "../../Containers";

export class ProductsFirebase extends FirebaseContainer {
    constructor() {
        super ({
            collection: 'products'
        })
    }
}