import { Link } from "react-router-dom";

export default function ProductCard({id, title, description, thumbnail, price, stock}) {
    return (
        <div className="productContainer row">
            <div className="col-2">
                <Link><img src={thumbnail} alt={title} className='cardImage'/></Link>
            </div>
            <div className="col-10">
                <div className="mt-2 ms-5">
                    <Link className="link" to={`/products/${id}`}><h2 className="text">{title}</h2></Link>
                    <Link className="link"><p className="textSecondary">Vendido por <span className="userProductSeller">Usuario</span></p></Link>
                    <Link className="link" to={`/products/${id}`}><h2 className="text textPrice">$ {price}</h2></Link>
                </div>
            </div>
            <hr className="mt-3"/>
        </div>
    )
}