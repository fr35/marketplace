import CartIcon from '../CartIcon/CartIcon'
import ChatIcon from '../ChatIcon/ChatIcon'
import Logo from '../Logo/Logo'
import SearchInput from '../SearchInput/SearchInput'
import UserProfileIcon from '../UserProfileIcon/UserProfileIcon'
import WishListIcon from '../WishListIcon/WishListIcon'

export default function HeaderSesion() {
    return (
        <header className='container-fluid header d-flex justify-content-between'>
            <Logo></Logo>
            <SearchInput></SearchInput>
                <div className="center">
                    <ChatIcon></ChatIcon>
                    <WishListIcon></WishListIcon>
                    <CartIcon></CartIcon>
                    <UserProfileIcon></UserProfileIcon>
                </div>
        </header>
    )
}