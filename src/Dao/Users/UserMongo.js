import { MongoDBContainer } from "../../Containers/index.js";
import { userModel } from "../../models/index.js";

export class UserMongo extends MongoDBContainer {
    constructor() {
        super({
            collection: userModel.userCollection,
            schema: userModel.userSchema,
        });
    }
}