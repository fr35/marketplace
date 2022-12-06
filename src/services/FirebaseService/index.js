import admin from "firebase-admin"
import * as serviceAccount from "../../db/firebaseDB.json" assert {type: "json"}


const conectFirebase = async()=>{
	try{
		admin.initializeApp({
			credential: admin.credential.cert(serviceAccount)
		})
		const db = admin.firestore()
		console.log('FIREBASE CONECTADO')
		return db
	}
	catch(error){
		console.log('ERROR AL CONECTAR A FIREBASE ',error)
	}

}

export const FirebaseService = {
    conectFirebase
}