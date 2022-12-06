import { Router } from "express";
import { ProductController } from "../../controllers/index.js";
import {verifyRole} from "../../middlewares/index.js"

const router = Router()

router.get("/", ProductController.getAll)
router.get("/:id", ProductController.getById)
router.post("/", verifyRole, ProductController.createProduct)
router.delete("/:id", ProductController.deleteById)


export { router as ProductRouter }