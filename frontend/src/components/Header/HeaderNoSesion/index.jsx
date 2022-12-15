import "../Header/header.css"

export default function HeaderNoSesion() {
    return (
        <header className="container-fluid header">
            <div className="row">
            <div className="col center">
                <h1 className="pe-1 m-0 icon">Marketplace</h1>
                <i className="bi bi-shop icon"></i>
            </div>
            <div className="col"></div>
            <div className="col"></div>
            </div>
        </header>
    )
}