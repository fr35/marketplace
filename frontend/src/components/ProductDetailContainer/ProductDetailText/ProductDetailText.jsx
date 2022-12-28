import ProductStarRating from "../ProductStarRating/ProductStarRating";

export default function ProductDetailText({product}) {
    return (
        <div className="ProductDetailTextContainer">
            <div>
                <p className="text-secondary conditionProduct">Nuevo</p>
                <div className="d-flex justify-content-between">
                    <h2 className="detailTextTitle">{product.title}</h2>
                    <button className="btnHeart">
                        <i className="bi bi-heart iconHeart text-primary" height='22' width='22'></i>
                    </button>
                </div>
                <ProductStarRating></ProductStarRating>
                <div>
                    <h2 className="productPrice">$ {product.price}</h2>
                </div>
            </div>
        </div>
    )
}