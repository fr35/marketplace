
export default function SignUp() {
    const container = {marginTop: '20px', border: '1px solid', padding: '50px 200px 40px 200px'}
    const inputDate = {marginLeft: '20px'}
    const labelDate = {fontSize: '20px'}
    const logIn = {fontSize: '20px'}
    return (
        <section className='d-flex justify-content-center align-items-center'>
            <div style={container}>
                <form action="">
                    <div className="row">
                        <div className='mb-3 col'><input className="form-control" type="text" placeholder="First Name" required/></div>
                        <div className='mb-3 col'><input className="form-control" type="text"  placeholder="Last Name" required/></div>
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
                    <div className='mb-3 d-flex justify-content-center'>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male" required/>
                            <label class="form-check-label" for="inlineRadio1">Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female" required/>
                            <label class="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                    </div>
                    <div className="mb-4 d-flex justify-content-center">
                        <label htmlFor="" style={labelDate}>Birthday:</label>
                        <input type="date" name="" id="" style={inputDate} required/>
                    </div>
                    <div className="d-flex justify-content-center mb-4"><button type="submit" className="btn btn-primary">Sign Up</button></div>
                </form>
                <hr className="mb-3"/>
                <p className="d-flex justify-content-center" style={logIn}>Have an acount? Log In</p>
            </div>
        </section>
    )
}