import './index.css'

export default function Header() {
    return (
        <header id='containerHeader'>
            <div id='logoContainerHeader'>
                <h1 id='textLogoHeader'>Marketplace</h1>
                <i className="bi bi-shop" id='logoHeader'></i>
            </div>
            <div id='userContainerHeader'>
                <div className="dropdownHeader">
                    <button className="dropbtnHeader"><i className="bi bi-person-circle" id='userLogoHeader'></i></button>
                    <div className="dropdown-contentHeader">
                        <a href="#">View Perfil</a>
                        <a href="#">Preferences</a>
                        <a href="#">Sign Out</a>
                    </div>
                </div>
            </div>
        </header>
    )
}