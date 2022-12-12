export default function HeaderWorkers() {
    const p = {color: 'white', fontSize: '10px'}
    return (
        <header className='container-fluid header'>
        <div className="row">
            <div  className='col center'>
                <h1 className="pe-1 m-0 icon">Marketplace</h1>
                <i className="bi bi-shop icon"></i>
            </div>
            <div className="col center">
                    <input type="text" name="" id="input" placeholder='Search...'/>
            </div>
            <div className="col center">
                <div className="me-4">
                    <button className='button'><i className="bi bi-chat-dots icon"></i></button>
                </div>
                <div className="dropdown">
                    <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className='button'><i className="bi bi-person-circle icon"></i></button>
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