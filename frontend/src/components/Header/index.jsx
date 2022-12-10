import './index.css'

export default function Header() {
    const container = {backgroundColor: '#3b5998', boxShadow: '0px 1px 10px 0px', paddingTop: '1vh', paddingBottom: '1vh'}
    const logo = {fontSize: '25px', color: 'white'}
    const btn = {background: 'none', border: 'none'}
    const search = {}
    return (
        <header style={container}>
            <div className="row">
                <div  className='center col'>
                    <h1 style={logo} className="pe-1 m-0">Marketplace</h1>
                    <i className="bi bi-shop" style={logo}></i>
                </div>
                <div className="center col">
                        <input type="text" name="" id="input" placeholder='Search...' className="" style={search}/>
                </div>
                <div className="center col">
                    <div className="me-5">
                        <button style={btn}><i className="bi bi-chat-dots" style={logo}></i></button>
                    </div>
                    <div className="me-5">
                        <button style={btn}><i className="bi bi-heart" style={logo}></i></button>
                    </div>
                    <div className="me-5">
                        <button style={btn}><i className="bi bi-cart" style={logo}></i></button>
                    </div>
                    <div className="dropdown">
                        <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={btn}><i className="bi bi-person-circle" style={logo}></i></button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">View Profile</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Log out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}