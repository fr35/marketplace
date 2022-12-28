import FacebookBtn from "../BtnPassport/FacebookBtn/FacecebookBtn"
import GithubBtn from "../BtnPassport/GithubBtn/GithubBtn"
import GoogleBtn from "../BtnPassport/GoogleBtn/GoogleBtn"
import TwitterBtn from "../BtnPassport/TwitterBtn/TwitterBtn"
import SignUpForm from "../SignUpForm/SignUpForm"
import '../UserFormContainer.css'
import { Link } from "react-router-dom"

export default function SignUpFormContainer() {
    return (
        <main className="main userFormContainer userFormContainerSignUp text-white">
            <section className='userFormSection'>
                <div>
                    <h2 className="userFormTitle">Sign Up</h2>
                    <hr className="hrUserForm mt-1" />
                </div>
                <div className="d-flex justify-content-between">
                    <div className="divUserForm w-25">
                        <SignUpForm></SignUpForm>
                        <hr className="mb-2"/>
                        <p className="center fs-5">Have an acount? &nbsp;<Link to={'/'}>Log In</Link></p>
                    </div>
                    <div className="divUserButtons">
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