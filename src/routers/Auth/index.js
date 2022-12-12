import { Router } from "express";
import passport from "passport";
import {UserDao} from '../../Dao/index.js'
import bCrypt from "bcrypt";


const router = Router()


router.post('/signup', async (req,res) => {
    try {
        const {name, lastname, username, email, password} = req.body
        console.log(name, lastname, username, email, password);
        if(!name || !lastname || !username || !email || !password) return res.send({success: false})
        const existUser = await UserDao.getOne({email})
        if(existUser) return res.send({success: false, error: "el usuario ya existe"})
        const passwordHash = await bCrypt.hash(password, 10)
        if(existUser && bCrypt.compareSync(password, existUser.password)) {
            const updateUser = await UserDao.updateById(existUser._id, {
                ...existUser,
                password: passwordHash
            });
            return res.send({ success: true });
        }
        await UserDao.save({name, lastname, username, email, password: passwordHash})
        res.send({success: true})
    } catch (error) {
        console.log(error)
        res.send({success: false})
    }
})

router.post("/", passport.authenticate("login"), async (req, res) => {
    res.send({ success: true, message: "Logueado!", user: req.user });
});

export {router as AuthRouter}