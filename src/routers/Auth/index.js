import { Router } from "express";
import passport from "passport";
import {UserDao} from '../../Dao/index.js'
import bCrypt from "bcrypt";


const router = Router()

router.post('/', passport.authenticate('login'), async (req,res) => {
    res.send({success: true, message: 'logeado', user: req.user})
})
router.post('/signup', async (req,res) => {
    try {
        console.log('hola');
        const {name, lastname, username, email, password} = req.body
        console.log(name, lastname, username, email, password);
        if(!name || !lastname || !username || !email || !password) return res.send({success: false, error: 'faltan parametros'})
        const existUser = await UserDao.getOne({email})
        if(existUser) return res.send({success: false, error: "el usuario ya existe"})
        if(existUser && bCrypt.compareSync(password, existUser.password)) {
            const passwordHash = await bCrypt.hash(password, 10)
            const updateUser = await UserDao.updateById(existUser._id, {
                ...existUser,
                password: passwordHash
            });
            return res.send({ success: true });
        }
        const passwordHash = await bCrypt.hash(password, 10)
        await UserDao.save({name, lastname, username, email, password: passwordHash})
        res.send({success: true})
    } catch (error) {
        console.log(error)
        res.send({success: false})
    }
})

export {router as AuthRouter}