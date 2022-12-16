export default function SignUpForm() {
    const inputDate = {marginLeft: '20px'}
    const labelDate = {fontSize: '20px'}
    return (
        <form action="">
                            <div className="row">
                                <div className='mb-3 col'>
                                    <input className="form-control" type="text" placeholder="First Name" required/>
                                </div>
                                <div className='mb-3 col'>
                                    <input className="form-control" type="text"  placeholder="Last Name" required/>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <input className="form-control" type="text" placeholder="Username" required/>
                            </div>
                            <div className='mb-3'>
                                <input className="form-control" type="email" placeholder="Email" required/>
                            </div>
                            <div className='mb-3'>
                                <input className="form-control" type="password"  placeholder="Password" required/>
                                <div class="col-auto">
                                    <span id="passwordHelpInline" class="form-text">Must be 8-20 characters long</span>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <input className="form-control" type="password" placeholder="Confirm Password" required/>
                            </div>
                            <div className="d-flex justify-content-center mb-4"><button type="submit" className="btn btn-primary">Sign Up</button></div>
                        </form>
    )
}