import { useCallback, useState } from "react";
import axios from 'axios'
import { Ring } from '@uiball/loaders'
import ProductsList from "../ProductsList/ProductsList";

export default function ProductsListContainer() {
    const [products, setProducts] = useState([])
    const getAllProducts = useCallback( async () => {
        setTimeout( async () => {
            const response = await axios.get('http://localhost:8080/products')
            setProducts(response.data)
        }, 2000);
    }, [])
    window.addEventListener('load', getAllProducts)
    
    return (
        <section>
            <div className="row">
            {products.length === 0 ? (
                <div className="center mt-5 pt-5">
                    <Ring 
                        size={50}
                        lineWeight={5}
                        speed={2} 
                        color="#3b5998" 
                    />
                </div> ) : 
                <ProductsList products={products}></ProductsList>
            }
            </div>
        </section>
    )
}