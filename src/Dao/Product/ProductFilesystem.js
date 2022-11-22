import {FilesystemContainer} from "../../Containers/index.js";
import { config } from "../../config/index.js";

export class ProductsFilesystem extends FilesystemContainer {
    constructor() {
        super(config.DATABASES.filesystem.PRODUCTS_FILENAME)
    }
}