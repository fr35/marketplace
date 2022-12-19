import { Router } from "express";
import passport from "passport";
import {UserDao} from '../../Dao/index.js'
import bCrypt from "bcrypt";
import {JWT_UTILS} from '../../utils/index.js'


const router = Router()

router.post('/signup', async (req,res) => {
    try {
        const {name, lastname, username, email, password} = req.body
        if(!name || !lastname || !username || !email || !password) return res.send({success: false})
        const existUser = await UserDao.getOne({email})
        if(existUser && existUser.password) return res.send({success: false, error: "el usuario ya existe"})
        const passwordHash = await bCrypt.hash(password, 10)
        if(existUser && !existUser.password) {
            const updateUser = await UserDao.updateById(existUser._id, {
                ...existUser,
                username,
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
    const {user} = req
    const token = JWT_UTILS.createToken(user, 'secret')
    res.cookie('tokenUserCookie', token, {maxAge: 3600000})
    res.send({ success: true, message: "Logueado!", user: req.user });
});

router.get("/github-login", passport.authenticate("github"), (req, res) => {
    res.send("github busca el perfil");
});
router.get("/github/callback", passport.authenticate("github"), (req, res) => {
    const {user} = req
    const token = JWT_UTILS.createToken(user, 'secret')
    res.cookie('tokenUserCookie', token, {maxAge: 3600000})
    res.send();
});

router.get('/twitter-login', passport.authenticate('twitter'), (req,res) => {
    res.send("twitter busca el perfil");
})
router.get("/twitter/callback", passport.authenticate("twitter"), (req, res) => {
    const {user} = req
    const token = JWT_UTILS.createToken(user, 'secret')
    res.cookie('tokenUserCookie', token, {maxAge: 3600000})
    res.send(req.user);
});
router.get('/facebook-login', passport.authenticate('facebook', {scope: ['email', 'public_profile']}), (req,res) => {
    res.send("facebook busca el perfil");
})
router.get("/facebook/callback", passport.authenticate("facebook"), (req, res) => {
    const {user} = req
    const token = JWT_UTILS.createToken(user, 'secret')
    res.cookie('tokenUserCookie', token, {maxAge: 3600000})
    res.send(req.user)
});
router.get('/google-login', passport.authenticate('google'), (req,res) => {
    res.send("google busca el perfil");
})
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
    const {user} = req
    const token = JWT_UTILS.createToken(user, 'secret')
    res.cookie('tokenUserCookie', token, {maxAge: 3600000})
    res.send(req.user);
});

router.post('/logout', (req, res) => {
    req.session.destroy()
    res.cookie('tokenUserCookie', '')
    res.send({success: true})
})

export {router as AuthRouter}