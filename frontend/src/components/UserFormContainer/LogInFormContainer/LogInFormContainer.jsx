import FacebookBtn from "../BtnPassport/FacebookBtn/FacecebookBtn"
import GithubBtn from "../BtnPassport/GithubBtn/GithubBtn"
import GoogleBtn from "../BtnPassport/GoogleBtn/GoogleBtn"
import TwitterBtn from "../BtnPassport/TwitterBtn/TwitterBtn"
import LogInForm from "../LogInForm/LogInForm"
import '../UserFormContainer.css'

export default function LogInFormContainer() {
    return (
        <main className="main spaceFormContainer">
            <section className='container-fluid'>
                    <div className="d-flex justify-content-around LogInForm">
                        <div className="mt-5 ms-5">
                            <LogInForm></LogInForm>
                            <p className="center">Forgot your password?</p>
                            <hr className="mb-3"/>
                            <div className="center"><button className="btn btn-success">Create new account</button></div>
                        </div>
                        <div>
                            <h2>Log In</h2>
                            <p className="or">Or</p>
                        </div>
                        <div className="center mt-5 me-5">
                            <div>
                                <FacebookBtn></FacebookBtn>
                                <GoogleBtn></GoogleBtn>
                                <TwitterBtn></TwitterBtn>
                                <GithubBtn></GithubBtn>
                            </div>
                        </div>
                    </div>
            </section>
        </main>
    )
}