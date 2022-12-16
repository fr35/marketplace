import FacebookBtn from "../BtnPassport/FacebookBtn/FacecebookBtn"
import GithubBtn from "../BtnPassport/GithubBtn/GithubBtn"
import GoogleBtn from "../BtnPassport/GoogleBtn/GoogleBtn"
import TwitterBtn from "../BtnPassport/TwitterBtn/TwitterBtn"
import SignUpForm from "../SignUpForm/SignUpForm"
import '../UserFormContainer.css'
export default function SignUpFormContainer() {
    const logIn = {fontSize: '20px'}
    return (
        <main className="main pt-5">
            <section className='container-fluid d-flex justify-content-around'>
                    <div className="SignUpForm">
                        <h2 className="center">Sign Up</h2>
                        <SignUpForm></SignUpForm>
                        <hr className="mb-3"/>
                        <p className="d-flex justify-content-center" style={logIn}>Have an acount? Log In</p>
                    </div>
                    <div className="center">
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