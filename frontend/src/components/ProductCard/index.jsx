import './productCard.css'

export default function ProductCard() {
    return (
        <div class="productCard">
            <img src="https://dummyimage.com/600x400/fff/0011ff" class="productCardImg" alt="..."/>
            <hr/>
            <div class="productCardBody">
                <h5 class="productCardTitle center mb-3">Card title</h5>
                <h4 class="productCardPrice center mb-3">$10</h4>
                <div className='center'><button className='btn btn-primary'>Ver Más</button></div>
            </div>
        </div>
    )
}