import { FirebaseContainer } from "../../Containers/FirebaseContainer.js";

export class CartsFirebase extends FirebaseContainer {
    constructor() {
        super ({
            collection: 'carts'
        })
    }
}