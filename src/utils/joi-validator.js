import joi from "joi";

const product = joi.object({
    title: joi.string().min(3).max(70).required(),
    description: joi.string().min(3).max(150).required(),
    code: joi.string().min(3).max(10).required(),
    thumbnail: joi.string().min(3).max(300).required(),
    price: joi.number().required(),
    stock: joi.number().required(),
    timestamp: joi.string().required(),
})

const author = joi.object({
    id: joi.string().max(254).required(),
    nombre: joi.string().max(70).min(3).required(),
    apellido: joi.string().max(70).min(3).required(),
    edad: joi.number().required(),
    alias: joi.string().max(20).min(3).required(),
    avatar: joi.string().required(),
})
const message = joi.object({
    author: joi.array(author).required(),
    text: joi.string().min(10).max(300).required()
})

export const JOI_VALIDATOR = { product, message}