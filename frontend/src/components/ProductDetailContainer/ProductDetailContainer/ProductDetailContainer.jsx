import { useCallback, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import ProductDetail from "../ProductDetail/ProductDetail"

export default function ProductDetailContainer() {
    const [products, setProducts] = useState([])
    const id = useParams().id
    const getProduct = useCallback( async () => {
        const response = await axios.get(`http://localhost:8080/products/${id}`, {withCredentials: true})
        setProducts(response.data)
    }, [])
    window.addEventListener('load', getProduct)
    return (
        <ProductDetail product={products}></ProductDetail>
    )
}