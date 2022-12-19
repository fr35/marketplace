

export default function ProductCard({id, title, description, thumbnail, price, stock}) {
    return (
        <div className="mb-5 productContainer row">
            <div className="col-2">
                <img src={thumbnail} alt={title} className='cardImage'/>
            </div>
            <div className="col-10 ps-5">
                <div className="mt-2">
                    <h2 className="text">{title}</h2>
                    <p className="textSecondary">Vendido por Nombre del usuario y link al perfil</p>
                    <h2 className="text textPrice">$ {price}</h2>
                </div>
            </div>
        </div>
    )
}