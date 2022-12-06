import { Router } from "express";
import { logIn, logOut } from "../../controllers/index.js"


const router = Router()

router.get("/logIn", logIn)

router.get('/logOut',logOut)



export { router as SessionRouter }