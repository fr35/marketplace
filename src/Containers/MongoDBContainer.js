import mongoose from "mongoose"

class MongoDBContainer {
    constructor(collection, schema) {
    this.model = mongoose.model(collection, schema)
    }

    async getAll() {
        const response = await this.model.find()
        return response
    }

    async save(element) {
        const response = await this.model.create(element)
        return response
    }

    async getById(id) {
        const response = await this.model.findById(id)
        return response
    }

    async updateById(id, newData) {
        const response = await this.model.findByIdAndUpdate(id, newData, {
            new: true
        });
        return response
    }
}

export {MongoDBContainer}