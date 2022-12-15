

export default function ProductCard({id, title, description, thumbnail, price, stock}) {
    const cardSize = {width: '400px', height: '100%', position: 'relative'}
    const imgSize = {height: '300px',background: 'none', width: '100%'}
    const backgroundNone = {background: 'none'}
    return (
        <div className="col col-lg-4 col-md-6 mb-5 center">
            <div className="bg-dark" style={cardSize}>
                <img src={thumbnail} alt={title} style={imgSize}/>
                    <div className="text-center">
                        <h4 className="mt-3 text-white" style={backgroundNone}>{title}</h4>
                        <h4 className="mt-1 text-white" style={backgroundNone}>${price}</h4>
                    </div>
            </div>
        </div>
    )
}