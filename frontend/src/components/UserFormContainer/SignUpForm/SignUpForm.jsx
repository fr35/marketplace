import axios from 'axios'
import { useCallback } from 'react';
export default function SignUpForm() {
    const userSignUp = useCallback(async () => {
        const user = {
            name: document.getElementById("name").value,
            lastname: document.getElementById("lastname").value,
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };
        await axios.post('http://localhost:8080/auth/signup', user)
    }, [])
    return (
        <form action="">
            <div className='row'>
                <div className='mb-3 col'>
                    <input className="form-control" type="text" placeholder="First Name" id="name" required/>
                </div>
                <div className='mb-3 col'>
                    <input className="form-control" type="text"  placeholder="Last Name" id='lastname' required/>
                </div>     
            </div>               
            <div className='mb-3'>
                <input className="form-control" type="text" placeholder="Username" id='username' required/>
            </div>
            <div className='mb-3'>
                <input className="form-control" type="email" placeholder="Email" id='email' required/>
            </div>
            <div className='mb-3'>
                <input className="form-control" type="password"  placeholder="Password" id='password' required/>
                <div class="col-auto">
                    <span id="passwordHelpInline" class="form-text">Must be 8-20 characters long</span>
                </div>
            </div>
            <div className='mb-3'>
                <input className="form-control" type="password" placeholder="Confirm Password" required/>
            </div>
            <div className="d-flex justify-content-center mb-4"><button type="submit" className="btn btn-primary" onClick={userSignUp}>Sign Up</button></div>
        </form>
    )
}