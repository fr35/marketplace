import axios from "axios"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

export default function FacebookBtn() {
    const navigate = useNavigate()
    const userLogInFacebook = useCallback(async () => {
        const response = await axios.get("http://localhost:8080/auth/facebook-login",{ withCredentials: true })
            if (response.status === 200) {
                const response2 = await axios.get('http://localhost:8080/auth/facebook/callback')
                if (response2.status === 200) {
                    navigate("/products");
                    return;
                }
            }}, [, navigate])
    return (
        <button className='Btn mb-4 center' onClick={userLogInFacebook}>
			<img src="../facebook.png" alt="facebook icon" className="facebookIcon me-2"/>
			<span>Continue with Facebook</span>
		</button>
    )
}