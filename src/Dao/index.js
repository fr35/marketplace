import { config } from "../config/index.js";
import { MongoDBService, FirebaseService } from "../services/index.js";
import { CartsMongo, CartsFilesystem, CartsMemory, CartsFirebase} from "./Cart/index.js"
import {ProductsMongo, ProductsFilesystem, ProductsMemory, ProductsFirebase} from "./Product/index.js"
import {MessagesMongo, MessagesFilesystem, MessagesMemory, MessagesFirebase} from "./Mesages/index.js"
import {UserFilesystem, UserMongo} from './Users/index.js'

const getSelectedDaos = () => {
    switch (config.SERVER.SELECTED_DATABASE) {
        case "mongo": {
            MongoDBService.conectMongoDb()
            return {
                ProductDao: new ProductsMongo(),
                CartDao: new CartsMongo(),
                MessagesDao: new MessagesMongo(),
                UserDao: new UserMongo()
            }
        }
        case "firebase": {
            FirebaseService.conectFirebase()
            return {
                ProductDao: new ProductsFirebase(),
                CartDao: new CartsFirebase(),
                MessagesDao: new MessagesFirebase(),
                UserDao: new UserMongo()
            }
        }
        case "filesystem": {
            return {
                ProductDao: new ProductsFilesystem(),
                CartDao: new CartsFilesystem(),
                MessagesDao: new MessagesFilesystem(),
                UserDao: new UserFilesystem()
            }
        }
        case "memory": {
            return {
                ProductDao: new ProductsMemory(),
                CartDao: new CartsMemory(),
                MessagesDao: new MessagesMemory(),
                UserDao: new UserMongo()
            }
        }
    }
}

const {ProductDao, CartDao, MessagesDao, UserDao} = getSelectedDaos()

export {ProductDao, CartDao, MessagesDao, UserDao}
