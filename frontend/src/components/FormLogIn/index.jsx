export default function FormLogIn() {
    const container = {paddingTop: '50px', paddingBottom: '1000px'}
    const formContainer = { padding: '20px 100px 40px 100px', backgroundColor: '#fff'}
    return (
        <main className="main">
            <section className='container' style={container}>
                <div className="row">
                    <div style={formContainer} className='col'>
                        <h2 className="center">Log In</h2>
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
                        <p className="d-flex justify-content-center">Forgot your password?</p>
                        <hr className="mb-3"/>
                        <div className="d-flex justify-content-center"><button className="btn btn-success">Create new account</button></div>
                    </div>
                    <div className="col center">
                        <div className="">
                            <div className="mb-5"><button className="btn btn-primary">Log in with</button></div>
                            <div className="mb-5"><button className="btn btn-secondary">Log in with</button></div>
                            <div className="mb-5"><button className="btn btn-danger">Log in with</button></div>
                            <div className="mb-5"><button className="btn btn-warning">Log in with</button></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}