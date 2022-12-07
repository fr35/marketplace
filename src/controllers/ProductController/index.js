import { ProductDao } from "../../Dao/index.js"
import {DATE_UTILS, ERRORS_UTILS, JOI_VALIDATOR, LOGGER_UTILS} from "../../utils/index.js"

const getAll = async (req, res) => {
    try {
        const product = await ProductDao.getAll()
        if (!product) {
          return res.send({ error: ERRORS_UTILS.MESSAGES.NO_PRODUCT })
        }
        res.send(product)
    } catch (error) {
        res.send({error: "Internal server error"})
    }
}

const getById = async (req, res) => {
    try {
        const {id} = req.params
        const product = await ProductDao.getById(id)
        if (!product) {
          return res.send({ error: ERRORS_UTILS.MESSAGES.NO_PRODUCT })
        }
        res.send(product)
    } catch (error) {
        res.send({error: "Internal server error"})
    }
}

const createProduct = async (req, res) => {
  try {
    const { title, description, code, thumbnail, price, stock } = req.body
    const product = await JOI_VALIDATOR.product.validateAsync({
      title,
      description,
      code,
      thumbnail,
      price,
      stock,
      timestamp: DATE_UTILS.getTimestamp(),
    })
    const createdProduct = await ProductDao.save(product)
    res.send(createdProduct)
  } catch (error) {
    await LOGGER_UTILS.addLog(error)
    res.send(error)
  }
}

const deleteById = async (req, res) => {
  try {
    const { id } = req.params
    await ProductDao.deleteById(id)
    res.send({ success: true })
  } catch (error) {
    console.error(error)
    res.send({error: "Ocurrio un error"})
  }
}

export const ProductController = {getAll, getById, createProduct, deleteById}