import ProductCard from "../ProductCard"
import ProductsFilter from "../ProductsFilter"
import './main.css'

export default function Main() {
    return (
        <main className="main">
            <section className="container-fluid section">
                <div className="gridContainer">
                    <aside className="filterContainer ms-4">
                        <ProductsFilter></ProductsFilter>
                    </aside>
                    <div className="cardsContainer">
                        <div className="cardRow center">
                            <div className="cardColumn me-4">
                                <ProductCard></ProductCard>
                            </div>
                            <div className="cardColumn me-4">
                                <ProductCard></ProductCard>
                            </div>
                            <div className="cardColumn me-4">
                                <ProductCard></ProductCard>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}