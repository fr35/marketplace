import {MessagesDao} from "../../Dao/index.js"
import {DATE_UTILS, ERRORS_UTILS, JOI_VALIDATOR, LOGGER_UTILS} from "../../utils/index.js"
import {mostar, objDesnormalizado, objNormalizado, getLength} from "../../normalizr/index.js"

const getAll = async (req, res) => {
    try {
        const messages = await MessagesDao.getAll()
        if (!messages) {
            return res.send({ error: ERRORS_UTILS.MESSAGES.NO_MESSAGES })
        }
        const data = mostar(messages)
        const data2 = objNormalizado(data)
        const data3 = objDesnormalizado()
        console.log('CANTIDAD DE CARACTERES ORIGINAL: ',JSON.stringify().length)
        console.log('CANTIDAD DE CARACTERES DESNORMALIZADO: ',JSON.stringify(data3).length)
        console.log('CANTIDAD DE CARACTERES NORMALIZADO: ',JSON.stringify(data2).length)
        const lengthNormalizado = getLength(objNormalizado(data))
        const lengthDesormalizado = getLength(objDesnormalizado())
        console.log((lengthNormalizado*100) / lengthDesormalizado)
        res.send(data)
    } catch (error) {
        res.send({error: "Internal server error"})
    }
}

const getById = async (req, res) => {
    try {
        const {id} = req.params
        const message = await MessagesDao.getById(id)
        if (!message) {
            return res.send({ error: ERRORS_UTILS.MESSAGES.NO_MESSAGES})
        }
        const data = mostar(message)
        const data2 = objNormalizado(data)
        const data3 = objDesnormalizado()
        console.log('CANTIDAD DE CARACTERES ORIGINAL: ',JSON.stringify().length)
        console.log('CANTIDAD DE CARACTERES DESNORMALIZADO: ',JSON.stringify(data3).length)
        console.log('CANTIDAD DE CARACTERES NORMALIZADO: ',JSON.stringify(data2).length)   
        const lengthNormalizado = getLength(objNormalizado(data))
        const lengthDesormalizado = getLength(objDesnormalizado())
        console.log((lengthNormalizado*100) / lengthDesormalizado)
        res.send(data)
    } catch (error) {
        res.send({error: "Internal server error"})
    }
}

const createMessage = async (req, res) => {
    try {
        const {author, text} = req.body
        const message = await JOI_VALIDATOR.product.validateAsync({
            author,
            text,
            timestamp: DATE_UTILS.getTimestamp(),
        })
        const createdMessage = await MessagesDao.save(message)
        const messages = await MessagesDao.getAll()
        const data = mostar(messages)
        const data2 = objNormalizado(data)
        const data3 = objDesnormalizado()
        console.log('CANTIDAD DE CARACTERES ORIGINAL: ',JSON.stringify().length)
        console.log('CANTIDAD DE CARACTERES DESNORMALIZADO: ',JSON.stringify(data3).length)
        console.log('CANTIDAD DE CARACTERES NORMALIZADO: ',JSON.stringify(data2).length)   
        const lengthNormalizado = getLength(objNormalizado(data))
        const lengthDesormalizado = getLength(objDesnormalizado())
        console.log((lengthNormalizado*100) / lengthDesormalizado)
        res.send(data)
    } catch (error) {
        await LOGGER_UTILS.addLog(error)
        res.send(error)
    }
}

const deleteById = async (req, res) => {
    try {
        const { id } = req.params
        await MessagesDao.deleteById(id)
        res.send({ success: true })
    } catch (error) {
        console.error(error)
        res.send({error: "Ocurrio un error"})
    }
}

export const MessagesController = {getAll, getById, createMessage, deleteById}