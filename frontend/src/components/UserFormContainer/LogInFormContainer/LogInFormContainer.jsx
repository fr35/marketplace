import { Link } from "react-router-dom";
import FacebookBtn from "../BtnPassport/FacebookBtn/FacecebookBtn";
import GithubBtn from "../BtnPassport/GithubBtn/GithubBtn";
import GoogleBtn from "../BtnPassport/GoogleBtn/GoogleBtn";
import TwitterBtn from "../BtnPassport/TwitterBtn/TwitterBtn";
import LogInForm from "../LogInForm/LogInForm";
import "../UserFormContainer.css";

export default function LogInFormContainer() {
  return (
    <main className="main userFormContainer userFormContainerLogIn text-white">
      <section className="userFormSection">
        <div>
          <h2 className="userFormTitle">Log In</h2>
          <hr className="hrUserForm mt-" />
        </div>
        <div className="d-flex justify-content-between">
          <div className="divUserForm">
            <LogInForm></LogInForm>
            <hr className="mb-1"/>
            <p className="center fs-5">Forgot your password?</p>
            <Link to={'/signup'} className="center link">
              <button className="btn btn-light">Create new account</button>
            </Link>
          </div>
          <div className="divUserButtons mt-">
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
  );
}
