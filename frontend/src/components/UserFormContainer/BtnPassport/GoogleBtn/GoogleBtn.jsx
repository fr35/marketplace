import '../BtnPassport.css'
import axios from "axios"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

export default function GoogleBtn() {
    const navigate = useNavigate()
    const userLogInGoogle = useCallback(async () => {
        const response = await axios.get("http://localhost:8080/auth/google-login",{ withCredentials: true })
            if (response.status === 200) {
                const response2 = await axios.get('http://localhost:8080/auth/google/callback')
                if (response2.status === 200) {
                    navigate("/products");
                    return;
                }
            }}, [, navigate])
    return (
        <button className='Btn mb-4 center' onClick={userLogInGoogle}>
			<img src="../google.png" alt="google icon" className="btnIcon me-2"/>
			<span>Continue with Google</span>
		</button>
    )
}