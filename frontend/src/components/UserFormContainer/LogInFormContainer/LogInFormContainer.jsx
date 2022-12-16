import FacebookBtn from "../BtnPassport/FacebookBtn/FacecebookBtn"
import GithubBtn from "../BtnPassport/GithubBtn/GithubBtn"
import GoogleBtn from "../BtnPassport/GoogleBtn/GoogleBtn"
import TwitterBtn from "../BtnPassport/TwitterBtn/TwitterBtn"
import LogInForm from "../LogInForm/LogInForm"
import '../UserFormContainer.css'

export default function LogInFormContainer() {
    return (
        <main className="main pt-5 bottom">
            <section className='container-fluid d-flex justify-content-around'>
                    <div className="LogInForm">
                        <h2 className="center mb-3">Log In</h2>
                        <LogInForm></LogInForm>
                        <p className="center">Forgot your password?</p>
                        <hr className="mb-3"/>
                        <div className="center"><button className="btn btn-success">Create new account</button></div>
                    </div>
                    <div className="center mt-3">
                        <div className="">
                            <FacebookBtn></FacebookBtn>
                            <GoogleBtn></GoogleBtn>
                            <TwitterBtn></TwitterBtn>
                            <GithubBtn></GithubBtn>
                        </div>
                    </div>
            </section>
        </main>
    )
}