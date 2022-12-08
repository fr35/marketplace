export default function Header() {
    const container = {display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#3b5998', height: '4rem'}
    const logo = {fontSize: '25px', color: 'white'}
    const btn = {background: 'none', border: 'none'}
    return (
        <header style={container}>
            <div  className='center ms-3'>
                <h1 style={logo} className="pe-1 m-0">Marketplace</h1>
                <i className="bi bi-shop" style={logo}></i>
            </div>
            <div className="center">
                    <form action="" className="center input-group-sm">
                        <input type="text" name="" id="" placeholder='Search...' className="form-control form-control-sm me-1"/>
                        <button type="submit" className="input-group-text"><i className="bi bi-search"></i></button>
                    </form>
            </div>
            <div className="center">
                <div className="me-3">
                    <button style={btn}><i className="bi bi-heart" style={logo}></i></button>
                </div>
                <div className="me-3">
                    <button style={btn}><i className="bi bi-cart" style={logo}></i></button>
                </div>
                <div className="me-3">
                    <button style={btn}><i className="bi bi-chat-dots" style={logo}></i></button>
                </div>
                <div className="dropdown me-3">
                    <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={btn}><i className="bi bi-person-circle" style={logo}></i></button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">View Profile</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Log out</a></li>
                    </ul>
                </div>
                
            </div>
        </header>
    )
}