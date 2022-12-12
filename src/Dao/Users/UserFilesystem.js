import {FilesystemContainer} from "../../Containers/index.js";
import { config } from "../../config/index.js";

export class UserFilesystem extends FilesystemContainer {
    constructor() {
        super(config.DATABASES.filesystem.USERS_FILENAME)
    }
}