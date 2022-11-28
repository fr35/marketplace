import {MongoDBContainer} from "../../Containers/index.js"
import {messagesModel} from "../../models/MessagesModel.js"

export class MessagesMongo extends MongoDBContainer {
    constructor() {
        super({
            collection: messagesModel.messagesCollections,
            schema: messagesModel.messagesSchema
        })
    }
}



