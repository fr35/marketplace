import session from 'express-session'
import MongoStore from 'connect-mongo'

const MongoURI=process.env.MONGO_URI
const mongoOptions={useNewUrlParser:true, useUnifiedTopology:true}

const sessions = {
    mongo: session({
        store: MongoStore.create({
            mongoUrl:`${MongoURI}`,
            mongoOptions,
            ttl:600,
            collectionName:'sessions'
        }),
        secret:'secret',
        resave: false,
        saveUninitialized: false
    })
}

export {sessions}