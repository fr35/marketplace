

class FirebaseContainer {
    constructor(collection) {
        this.collection = collection //No se bien que se le pasa aca
    }

    async getAll() {
        const elements = await db.collection(this.collection).get()
        return elements.docs.map(doc =>{ return {...doc.data(), id:doc.id}})
    }
    async getById(id) {
        const element = await db.collection(this.collection).doc(id).get()
        return element.docs.data()
    }
    async save(element) {
        const response = await db.collection(this.collection).create(element)
        return response.docs.data()
    }
    async updatedById(id, element) {
        const updatedElement = await db.collection(this.collection).doc(id).update(element)
        return updatedElement.docs.data()
    }
}

export {FirebaseContainer}