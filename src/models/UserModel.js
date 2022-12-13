import { Schema } from "mongoose";

const userCollection = "users";

const userSchema = new Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true,},
    password: {type: String},
    cart: { type: Schema.Types.ObjectId, ref: "carts" },
    wishlist: {type: Schema.Types.ObjectId, ref: "carts" }
},
    { virtuals: true }
);

userSchema.set("toJSON", {
    transform: (_, response) => {
        response.id = response._id;
        delete response.__v;
        delete response._id;
        return response;
    },
});

export const userModel = { userCollection, userSchema };
