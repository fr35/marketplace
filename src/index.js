import express from "express"
import { config } from "./config/index.js"
import { ProductRouter, CartRouter, SessionRouter} from "./routers/index.js"
import cors from "cors"
import {products, items} from "./faker/index.js"
import {productos} from "./models/ProductModel.js"
import {sessions} from "./session/index.js"



const app = express()

app.use(cors({origin: "http://localhost:3000"}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(sessions.mongo)


app.use("/api/products", ProductRouter)
app.use("/api/cart", CartRouter)
app.use('/logs', SessionRouter)



const server = app.listen(config.SERVER.PORT, () =>
    console.log(`Server running on port ${server.address().port}`)
)

//products()

//const mongo = async () => {
    //await productos.insertMany(items)
//}

//mongo()





