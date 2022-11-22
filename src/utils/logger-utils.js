import {FilesystemContainer} from "../Containers/index.js"
import { DATE_UTILS } from "./date-utils.js"

const LoggerDao = new FilesystemContainer("logs")

const addLog = async (error) => {
    const log = {timestamp: DATE_UTILS.getTimestamp(), message: error}
    await LoggerDao.save(log)
};

export const LOGGER_UTILS = {addLog}