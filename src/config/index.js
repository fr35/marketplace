import dotenv from "dotenv"
dotenv.config()

const PRODUCTS_FILENAME = "products"
const CARTS_FILENAME = "carts"
const MESSAGES_FILENAME = "messages"
const USERS_FILENAME = 'users'

const config = {
    SERVER: {
        PORT: process.env.PORT || 8080,
        SELECTED_DATABASE: process.env.SELECTED_DB ?? "memory",
    },
    DATABASES: {
        filesystem: {
            PRODUCTS_FILENAME,
            CARTS_FILENAME,
            MESSAGES_FILENAME,
            USERS_FILENAME
        },
        mongo: {
            url: process.env.MONGO_DB_URL,
            dbName: process.env.MONGO_DB_NAME
        }
    },
}

export { config }