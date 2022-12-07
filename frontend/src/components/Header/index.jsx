import './index.css'

export default function Header() {
    return (
        <div id='container'>
            <div id='logoContainer'>
                <h1 id='textLogo'>Marketplace</h1>
                <i class="bi bi-shop" id='logo'></i>
            </div>
            <div id='userContainer'>
                <div class="dropdown">
                    <button class="dropbtn"><i class="bi bi-person-circle" id='userLogo'></i></button>
                    <div class="dropdown-content">
                        <a href="#">View Perfil</a>
                        <a href="#">Preferences</a>
                        <a href="#">Sign Out</a>
                    </div>
                </div>
            </div>
        </div>
    )
}