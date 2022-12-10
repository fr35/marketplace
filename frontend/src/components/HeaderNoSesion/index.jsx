import "../Header/index.css"

export default function HeaderNoSesion() {
    const container = {backgroundColor: '#3b5998', boxShadow: '0px 1px 10px 0px', paddingTop: '1vh', paddingBottom: '1vh'}
    const logo = {fontSize: '25px', color: 'white'}
    return (
        <header style={container}>
            <div className="d-flex justify-content-start align-items-center ps-5">
                <h1 className="pe-1 m-0" style={logo}>Marketplace</h1>
                <i className="bi bi-shop" style={logo}></i>
            </div>
        </header>
    )
}