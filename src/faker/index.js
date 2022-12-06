import { faker } from "@faker-js/faker"
import { DATE_UTILS } from "../utils/index.js"



const fakeUser = {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    age: faker.datatype.number({ min: 18, max: 89 }),
    avatar: faker.image.avatar(),
}
const fakeProduct = () => {
    return {
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        code: faker.datatype.string(3),
        thumbnail: faker.image.food(),
        price: faker.datatype.number({min: 100, max: 5000}),
        stock: faker.datatype.number({min: 10, max: 500}),
        timestamp: DATE_UTILS.getTimestamp()
    }
}

let items = []

const products = (qty = 1000) => {
    for (let i = 1; i <= qty; i++) {
        const newItem = fakeProduct()
        items.push(newItem)
    }
}

export {products, items}