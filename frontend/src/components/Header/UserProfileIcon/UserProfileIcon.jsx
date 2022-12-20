import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function UserProfileIcon() {
    const navigate = useNavigate()
    const userLogOutButton = useCallback(async () => {
        const response = await axios.post("http://localhost:8080/auth/logout",{},{ withCredentials: true })
            if (response.status === 200) {
                navigate("/");
                return;
            }}, [navigate])
    return (
        <div className="dropdown">
            <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className='button'>
                <i className="bi bi-person-circle icon"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><button className="dropdown-item" href="#">View Profile</button></li>
                <li><button className="dropdown-item" href="#">Settings</button></li>
                <li><button className="dropdown-item" onClick={userLogOutButton}>Log out</button></li>
            </ul>
        </div>
    )
}