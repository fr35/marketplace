import {config} from "../config/index.js"
import {ProductsMongo} from "./Product/index.js"
import {CartsMongo} from "./Cart/index.js"

const selectedDataBase = "mongo"

const getSelectedDaos = () => {
    switch(selectedDataBase) {
        case "mongo" : {
            return ({
                producstDao: new ProductsMongo(),
                cartsDao: new CartsMongo(),
            })
        }
    }
}

const {productsDao, cartsDao} = getSelectedDaos()
export {productsDao, cartsDao}
