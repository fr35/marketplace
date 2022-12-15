import ProductCard from "../ProductCard/ProductCard"

export default function ProductsList({products}) {
    return (
        products.map((product) => {
            return (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    thumbnail={product.thumbnail}
                    price={product.price}
                    stock={product.stock}
                ></ProductCard>
            )
        })
    )
}