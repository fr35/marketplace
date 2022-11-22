import {admin} from "firebase-admin"
import {serviceAccount} from "../../db/firebaseDB.json"

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
})
const conect = async()=>{
	try{
		const db = admin.firestore()
		console.log('FIREBASE CONECTADO')
		return db
	}
	catch(error){
		console.log('ERROR AL CONECTAR A FIREBASE ',error)
	}

}

export const FirebaseService = {
    conect
}