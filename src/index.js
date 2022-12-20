import express from "express"
import { config } from "./config/index.js"
import { ProductRouter, CartRouter, AuthRouter} from "./routers/index.js"
import cors from "cors"
import {products, items} from "./faker/index.js"
//import {productos} from "./models/ProductModel.js"
import {sessions} from "./session/index.js"
import {PassportAuth} from './middlewares/index.js'
import passport from "passport";
import cookieParser from "cookie-parser"

const app = express()

PassportAuth.init()

app.use(cookieParser())
app.use(sessions.mongo)
app.use(passport.initialize())
app.use(passport.session())

app.use(cors({origin: "http://localhost:3000", credentials: true}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.use('/auth', AuthRouter)
app.use("/products", ProductRouter)
app.use("/cart", CartRouter)


const server = app.listen(config.SERVER.PORT, () =>
    console.log(`Server running on port ${server.address().port}`)
)

//products()

//const mongo = async () => {
    //await productos.insertMany(items)
//}

//mongo()





