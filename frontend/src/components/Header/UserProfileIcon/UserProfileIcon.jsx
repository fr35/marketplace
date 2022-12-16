export default function UserProfileIcon() {
    return (
        <div className="dropdown">
            <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className='button'>
                <i className="bi bi-person-circle icon"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">View Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Log out</a></li>
            </ul>
        </div>
    )
}