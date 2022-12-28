import '../BtnPassport.css'
import axios from "axios"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

export default function GithubBtn() {
    const navigate = useNavigate()
    const userLogInGithub = (e) => {
        e.preventDefault()
        window.open('http://localhost:8080/auth/github-login', '_self')
        
    }
    return (
        <button className='Btn mb-4 center' onClick={userLogInGithub}>
			<img src="../github.png" alt="github icon" className="btnIcon me-2"/>
			<span>Continue with Github</span>
		</button>
    )
}