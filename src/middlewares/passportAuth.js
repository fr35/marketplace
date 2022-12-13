import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GithubStrategy } from "passport-github2";
import { Strategy as FacebookStrategy } from "passport-facebook"
import {Strategy as GoogleStrategy} from 'passport-google-oauth20'
import {Strategy as TwitterStrategy} from 'passport-twitter'
import {UserDao} from "../Dao/index.js";
import bCrypt from "bcrypt"
import { config } from "../config/index.js";


const init = () => {
    passport.serializeUser((user, done) => {
      done(null, user.id)
    })
    passport.deserializeUser( async (id, done) => {
      const user = await UserDao.getById(id)
      done(null, user)
    })
    passport.use('login', new LocalStrategy({
      usernameField: 'email', 
      passwordField: 'password',
      passReqToCallback: true
    }, async (req, email, password, done) => {
      try {
          if(!email || !password) return done(null, false)
          const user = await UserDao.getOne({email: email})
          if(!user) return done(null, false)
          const checkPassword = await bCrypt.compare(password, user.password)
          if(!checkPassword) return done(null, false)
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

    passport.use('github', new GithubStrategy({
      clientID: config.PASSPORT.github.clientId,
      clientSecret: config.PASSPORT.github.clientSecret,
      callbackURL: config.PASSPORT.github.callbackURL,
      scope: ["user:email"],
    }, async (accessToken, refreshToken, profile, done) => {
      try {
        const githubEmail = profile.emails?.[0].value
        if(!githubEmail) return done(null, false)
        const user = await UserDao.getOne({email: githubEmail})
        if(user) {
          const userResponse = {
            id: user._id,
            email: user.email,
            cart: user.cart,
            whislist: user.whislist
          }
          return done(null, userResponse)
        }
        const newUser = {
          email: githubEmail,
          name: profile._json.name,
          lastname: "-",
        }
        const createdUser = await UserDao.save(newUser)
        const userResponse = {
          id: createdUser._id,
          email: createdUser.email,
          cart: createdUser.cart,
          whislist: createdUser.whislist,
        }
        done(null, userResponse);
      } catch (error) {
        console.log(error);
        done(error)
      }
    }))

    passport.use('twitter', new TwitterStrategy({
      consumerKey: config.PASSPORT.twitter.apiKey,
      consumerSecret: config.PASSPORT.twitter.apiKeySecret,
      callbackURL: config.PASSPORT.twitter.callbackURL,
      includeEmail: true
    }, async (token, tokenSecret, profile, cb) => {
      try {
        const twitterEmail = profile.emails[0].value
        if(!twitterEmail) return done(null, false)
        const user = await UserDao.getOne({email: twitterEmail})
        if(user) {
          const userResponse = {
            id: user._id,
            email: user.email,
            cart: user.cart,
            whislist: user.whislist
          }
          return done(null, userResponse)
        }
        const newUser = {
          email: twitterEmail,
          name: profile._json.name,
          username: profile.username,
          lastname: "-",
        }
        const createdUser = await UserDao.save(newUser)
        const userResponse = {
          id: createdUser._id,
          email: createdUser.email,
          cart: createdUser.cart,
          whislist: createdUser.whislist,
        }
        cb(null, userResponse);
      } catch (error) {
        console.log(error);
        cb(error)
      }
    }))
}

export const PassportAuth = {
  init,
};