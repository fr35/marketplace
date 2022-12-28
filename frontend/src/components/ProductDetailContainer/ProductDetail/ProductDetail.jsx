import ImageDetail from '../ImageDetail/ImageDetail'
import '../ProductDetail.css'
import ProductDetailText from '../ProductDetailText/ProductDetailText'
export default function ProductDetail({product}) {
    return (
        <main className='main center pt-5'>
            <section className='sectionProductDetail'>
                <div className='imageDetailSection'><ImageDetail product={product}></ImageDetail></div>
                <div className='productTextSection'><ProductDetailText product={product}></ProductDetailText></div>
            </section>
        </main>
    )
}