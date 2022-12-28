import CartIcon from '../CartIcon/CartIcon'
import ChatIcon from '../ChatIcon/ChatIcon'
import Logo from '../Logo/Logo'
import SearchInput from '../SearchInput/SearchInput'
import UserProfileIcon from '../UserProfileIcon/UserProfileIcon'
import WishListIcon from '../WishListIcon/WishListIcon'

export default function HeaderSesion() {
    return (
        <header className=' header d-flex justify-content-between'>
            <div className='divLogo'>
                <Logo></Logo>
            </div>
            <SearchInput></SearchInput>
                <div className="center pe-3">
                    <ChatIcon></ChatIcon>
                    <WishListIcon></WishListIcon>
                    <CartIcon></CartIcon>
                    <UserProfileIcon></UserProfileIcon>
                </div>
        </header>
    )
}