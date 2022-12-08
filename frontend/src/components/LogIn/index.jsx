export default function LogIn() {
    const container = {marginTop: '50px', border: '1px solid', padding: '50px 150px 40px 150px'}
    return (
        <section className='d-flex justify-content-center align-items-center'>
            <div style={container}>
                <form action="">
                    <div className='mb-3'><input className="form-control" type="email" placeholder="Email" required/></div>
                    <div className='mb-3'><input className="form-control" type="password"  placeholder="Password" required/></div>
                    <div className="d-flex justify-content-center mb-4"><button type="submit" className="btn btn-primary">Log In</button></div>
                </form>
                <p className="d-flex justify-content-center">Forgot your password?</p>
                <hr className="mb-3"/>
                <div className="d-flex justify-content-center"><button className="btn btn-success">Create new account</button></div>
            </div>
        </section>
    )
}