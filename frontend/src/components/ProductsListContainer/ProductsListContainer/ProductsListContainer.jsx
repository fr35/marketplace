import { useCallback, useState } from "react";
import axios from 'axios'
import { Ring } from '@uiball/loaders'
import ProductsList from "../ProductsList/ProductsList";
import '../ProductsListContainer.css'
import ProductsFilter from "../ProductsFilter/ProductsFilter";

export default function ProductsListContainer() {
    const [products, setProducts] = useState([])
    const getAllProducts = useCallback( async () => {
        const response = await axios.get('http://localhost:8080/products', {withCredentials: true})
        setProducts(response.data)
    }, [])
    window.addEventListener('load', getAllProducts)
    return (
        <main className="main mainProductsListContainer">
            {products.length === 0 ? (
                <div className="center ringContainer">
                    <div className="ring">
                        <Ring 
                            size={50}
                            lineWeight={5}
                            speed={2} 
                            color="#3b5998" 
                        />
                    </div>
                </div> ) : 
                <div className="row">
                    <div className="col-3 mt-5"><ProductsFilter></ProductsFilter></div>
                    <div className="col-9 mt-5">
                        <ProductsList products={products}></ProductsList>
                    </div>
                </div>
            }
        </main>
    )
}