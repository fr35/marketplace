import "./index.css"

export default function LogIn() {
    return (
        <section id="containerLogIn">
            <div id="formContainerLogIn">
                <h2 className="center mb-5">Log In</h2>
                <form>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="inputEmail" placeholder="Email"/>
                        <label for="inputEmail">Email</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                        <label for="inputPassword">Password</label>
                    </div>
                    <div className="center"><button type="submit" className="btn btn-primary">Log In</button></div>
                </form>
            </div>
        </section>
    )
}