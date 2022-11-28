import { Router } from "express";
import {MessagesController} from "../../controllers/index.js"

const router = Router()

router.get("/", MessagesController.getAll)
router.post("/", MessagesController.createMessage)



export { router as MessagesRouter}