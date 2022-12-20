import '../BtnPassport.css'
import axios from "axios"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

export default function TwitterBtn() {
    const navigate = useNavigate()
    const userLogInTwitter = useCallback(async () => {
        const response = await axios.get("http://localhost:8080/auth/twitter-login",{ withCredentials: true })
            if (response.status === 200) {
                const response2 = await axios.get('http://localhost:8080/auth/twitter/callback')
                if (response2.status === 200) {
                    navigate("/products");
                    return;
                }
            }}, [, navigate])
    return (
        <button className='Btn mb-4 center' onClick={userLogInTwitter}>
			<img src="../twitter.png" alt="twitter icon" className="twitterIcon me-2"/>
			<span>Continue with Twitter</span>
		</button>
    )
}