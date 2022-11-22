import {FilesystemContainer} from "../../Containers/index.js";
import { config } from "../../config/index.js";

export class CartsFilesystem extends FilesystemContainer {
    constructor() {
        super(config.DATABASES.filesystem.CARTS_FILENAME)
    }
}