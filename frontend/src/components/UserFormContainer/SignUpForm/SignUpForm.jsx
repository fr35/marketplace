import axios from "axios"
import { useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"

export default function SignUpForm() {
    const navigate = useNavigate()
    const [signUpData, setSignUpData] = useState({email: '', password: '', username: '', name: '', lastname: ''})
    const userSignUpSubmit = useCallback(async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8080/auth/signup",
            {
                name: signUpData.name,
                lastname: signUpData.lastname,
                username: signUpData.username,
                email: signUpData.email,
                password: signUpData.password,
            },
            { withCredentials: true })
            if (response.status === 200) {
                navigate("/");
                return;
            }}, [signUpData.name, signUpData.lastname, signUpData.username, signUpData.email, signUpData.password, navigate])
    return (
        <form onSubmit={userSignUpSubmit}>
            <div className='row'>
                <div className='mb-2 col'>
                    <input className="form-control" name="name" type="text" placeholder="First Name" required
                    onChange={(e) =>
                        setSignUpData((prevState) => ({
                            ...prevState,
                            name: e.target.value,
                        }))
                    } value={signUpData.name}/>
                </div>
                <div className='mb-2 col'>
                    <input className="form-control" type="text"  placeholder="Last Name" name="lastname" required
                    onChange={(e) =>
                        setSignUpData((prevState) => ({
                            ...prevState,
                            lastname: e.target.value,
                        }))
                    } value={signUpData.lastname}/>
                </div>     
            </div>               
            <div className='mb-2'>
                <input className="form-control" type="text" placeholder="Username" name="username" required
                onChange={(e) =>
                    setSignUpData((prevState) => ({
                        ...prevState,
                        username: e.target.value,
                    }))
                } value={signUpData.username}/>
            </div>
            <div className='mb-2'>
                <input className="form-control" type="email" placeholder="Email" name="email" required
                onChange={(e) =>
                    setSignUpData((prevState) => ({
                        ...prevState,
                        email: e.target.value,
                    }))
                } value={signUpData.email}/>
            </div>
            <div className='mb-2'>
                <input className="form-control" type="password"  placeholder="Password" name="password" required
                onChange={(e) =>
                    setSignUpData((prevState) => ({
                        ...prevState,
                        password: e.target.value,
                    }))
                } value={signUpData.password}/>
                <div className="col-auto">
                    <span id="passwordHelpInline" className="form-text text-white">Must be 8-20 characters long</span>
                </div>
            </div>
            <div className="d-flex justify-content-center mb-2">
                <input type="submit" value="Sign Up" className="btn btn-primary"/>
            </div>
        </form>
    )
}