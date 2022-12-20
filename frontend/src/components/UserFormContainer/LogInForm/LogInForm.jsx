import axios from "axios"
import { useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"

export default function LogInForm() {
    const navigate = useNavigate()
    const [logInData, setLogInData] = useState({email: '', password: ''})
    const userLogInSubmit = useCallback(async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8080/auth/login",
            {
                email: logInData.email,
                password: logInData.password,
            },
            { withCredentials: true })
            if (response.status === 200) {
                navigate("/products");
                return;
            }}, [logInData.email, logInData.password, navigate])
    return (
        <form onSubmit={userLogInSubmit}>
            <div className='mb-3'>
                <input className="form-control" type="text" placeholder="Username or Email" name="email" required 
                onChange={(e) =>
                    setLogInData((prevState) => ({
                        ...prevState,
                        email: e.target.value,
                    }))
                } value={logInData.email}/>
            </div>
            <div className='mb-3'>
                <input className="form-control" type="password"  placeholder="Password" name="password" required
                onChange={(e) =>
                    setLogInData((prevState) => ({
                        ...prevState,
                        password: e.target.value,
                    }))
                } value={logInData.password}/>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <input type="submit" value="Log In" className="btn btn-primary"/>
            </div>
        </form>
    )
}