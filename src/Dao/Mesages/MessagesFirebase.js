import { FirebaseContainer } from "../../Containers/FirebaseContainer.js";

export class MessagesFirebase extends FirebaseContainer {
    constructor() {
        super ({
            collection: 'messages'
        })
    }
}




