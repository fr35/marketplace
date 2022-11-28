import { Router } from "express";
import { ProductController } from "../../controllers/index.js";
import { fakerProductsTable } from "../../faker/index.js";

const router = Router()

router.get("/", ProductController.getAll)
router.get("/:id", ProductController.getById)
router.post("/", verifyRole, ProductController.createProduct)
router.delete("/:id", ProductController.deleteById)
router.get("/productos-test", fakerProductsTable)

export { router as ProductRouter }