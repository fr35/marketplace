import "../header.css"
import Logo from "../Logo/Logo"

export default function HeaderNoSesion() {
    return (
        <header className="header d-flex justify-content-start">
            <div className="divLogo">
                <Logo></Logo>
            </div>
        </header>
    )
}