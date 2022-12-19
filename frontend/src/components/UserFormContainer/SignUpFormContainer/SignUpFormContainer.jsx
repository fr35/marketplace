import FacebookBtn from "../BtnPassport/FacebookBtn/FacecebookBtn"
import GithubBtn from "../BtnPassport/GithubBtn/GithubBtn"
import GoogleBtn from "../BtnPassport/GoogleBtn/GoogleBtn"
import TwitterBtn from "../BtnPassport/TwitterBtn/TwitterBtn"
import SignUpForm from "../SignUpForm/SignUpForm"
import '../UserFormContainer.css'
export default function SignUpFormContainer() {
    return (
        <main className="main spaceFormContainer">
            <section className='container-fluid'>
                    <div className="d-flex justify-content-around SignUpForm">
                    <div className="w-25 mt-5 ms-5">
                        <SignUpForm></SignUpForm>
                        <hr className="mb-3"/>
                        <p className="center fs-5">Have an acount? Log In</p>
                    </div>
                    <div className="">
                        <h2>Sign Up</h2>
                        <p className="or">Or</p>
                    </div>
                    <div className="center mb-5 pb-4 me-5">
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