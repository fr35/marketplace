import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GithubStrategy } from "passport-github2";
import { Strategy as FacebookStrategy } from "passport-facebook"
import {Strategy as GoogleStrategy} from 'passport-google-oauth20'
import {Strategy as TwitterStrategy} from 'passport-twitter'
import {UserDao} from "../Dao/index.js";
import bCrypt from "bcrypt"


const init = () => {
    passport.serializeUser((user, done) => {
      done(null, user.id)
    })
    passport.deserializeUser( async (id, done) => {
      const user = await UserDao.getById(id)
      done(null, user)
    })
    passport.use('/login', new LocalStrategy({
      usernameField: 'email', 
      passwordField: 'password',
      passReqToCallback: true
    }, async (req, email, password, done) => {
      try {
          if(!email || !password) return done(null, false)
          const user = await UserDao.getOne({email: email})
          if(!user) return done(null, false)
          if(bCrypt.compareSync(password, user.password)) return done(null, false)
          const userResponse = {
            id: user._id,
            email: user.email,
            cart: user.cart,
            whislist: user.whislist
          }
          done(null, userResponse)
      } catch (error) {
        console.log(error);
        done(error)
      }
    }))
}

export const PassportAuth = {
  init,
};