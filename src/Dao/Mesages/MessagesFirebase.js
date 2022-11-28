import { FirebaseContainer } from "../../Containers";

export class MessagesFirebase extends FirebaseContainer {
    constructor() {
        super ({
            collection: 'messages'
        })
    }
}




