import { Schema } from "mongoose"

const messagesCollections = "messages"
const authorSchema = new Schema({
    id: {type: String, required: true, max: 254},
    nombre: {type: String, required: true, max: 70, min: 3},
    apellido: {type: String, required: true, max: 70, min: 3},
    edad: {type: Number, required: true},
    alias: {type: String, required: true, max: 20, min: 3},
    avatar: {type: String, required: true},
})
const messagesSchema = new Schema({
    author: [authorSchema],
    text: {type: String, required: true, max: 300, min: 10}
}, {
    virtuals: true
})

messagesSchema.set("toJSON", {
    transform: (_, response) => {
        response.id = response._id
        delete response._id
        return response
    }
})

export const messagesModel = {messagesCollections, messagesSchema}