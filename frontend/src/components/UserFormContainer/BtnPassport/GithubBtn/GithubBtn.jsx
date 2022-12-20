import '../BtnPassport.css'
import axios from "axios"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

export default function GithubBtn() {
    const navigate = useNavigate()
    const userLogInGithub = useCallback(async () => {
        const response = await axios.get("http://localhost:8080/auth/github-login",{ withCredentials: true })
            if (response.status === 200) {
                const response2 = await axios.get('http://localhost:8080/auth/github/callback')
                if (response2.status === 200) {
                    navigate("/products");
                    return;
                }
            }}, [, navigate])
    return (
        <button className='Btn mb-4 center' onClick={userLogInGithub}>
			<img src="../github.png" alt="github icon" className="btnIcon me-2"/>
			<span>Continue with Github</span>
		</button>
    )
}