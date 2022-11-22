import { config } from "../config/index.js";
import { MongoDBService, FirebaseService } from "../services/index.js";
import { CartsMongo, CartsFilesystem, CartsMemory, CartsFirebase} from "./Cart/index.js"
import {ProductsMongo, ProductsFilesystem, ProductsMemory, ProductsFirebase} from "./Product/index.js"

const getSelectedDaos = () => {
    switch (config.SERVER.SELECTED_DATABASE) {
        case "mongo": {
            MongoDBService.init()
            return {
                ProductDao: new ProductsMongo(),
                CartDao: new CartsMongo(),
            }
        }
        case "firebase": {
            FirebaseService.conect()
            return {
                ProductDao: new ProductsFirebase(),
                CartDao: new CartsFirebase(),
            }
        }
        case "filesystem": {
            return {
                ProductDao: new ProductsFilesystem(),
                CartDao: new CartsFilesystem(),
            }
        }
        case "memory": {
            return {
                ProductDao: new ProductsMemory(),
                CartDao: new CartsMemory(),
            }
        }
    }
}

const {ProductDao, CartDao} = getSelectedDaos()

export {ProductDao, CartDao}
