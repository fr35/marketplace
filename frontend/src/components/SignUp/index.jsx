import "./index.css"

export default function SignUp() {
    return (
        <section id="containerLogIn">
            <div id="formContainerLogIn">
                <h2 className="center mb-3">Sign Up</h2>
                <form>
                    <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="inputFirstName" placeholder="First Name"/>
                        <label for="inputFirstName">First Name</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="inputLastName" placeholder="Last Name"/>
                        <label for="inputLastName">Last Name</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="email" class="form-control" id="inputEmail" placeholder="Email"/>
                        <label for="inputEmail">Email</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                        <label for="inputPassword">Password</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="password" class="form-control" id="inputConfirmPassword" placeholder=" Confirm Password"/>
                        <label for="inputConfirmPassword">Confirm Password</label>
                    </div>
                    <div className="mb-2 center">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male"/>
                            <label class="form-check-label" for="inlineRadio1">Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female"/>
                            <label class="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                    </div>
                    <div className="mb-3 center">
                        <label for="birthday">Birthday: </label>
                        <input type="date" id="birthday" name="birthday"/>
                    </div>
                    <div className="center"><button type="submit" className="btn btn-primary">Log In</button></div>
                </form>
            </div>
        </section>
    )
}