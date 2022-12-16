export default function LogInForm() {
    return (
        <form action="">
            <div className='mb-3'>
                <input className="form-control" type="text" placeholder="Username or Email" required/>
            </div>
            <div className='mb-3'>
                <input className="form-control" type="password"  placeholder="Password" required/>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <button type="submit" className="btn btn-primary">Log In</button>
            </div>
        </form>
    )
}