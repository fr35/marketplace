import { FirebaseContainer } from "../../Containers";

export class CartsFirebase extends FirebaseContainer {
    constructor() {
        super ({
            collection: 'carts'
        })
    }
}