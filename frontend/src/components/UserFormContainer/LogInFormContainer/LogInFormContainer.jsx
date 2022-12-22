import { Link } from "react-router-dom";
import FacebookBtn from "../BtnPassport/FacebookBtn/FacecebookBtn";
import GithubBtn from "../BtnPassport/GithubBtn/GithubBtn";
import GoogleBtn from "../BtnPassport/GoogleBtn/GoogleBtn";
import TwitterBtn from "../BtnPassport/TwitterBtn/TwitterBtn";
import LogInForm from "../LogInForm/LogInForm";
import "../UserFormContainer.css";

export default function LogInFormContainer() {
  return (
    <main className="main logInFormContainer">
      <section className="logInFormSection">
        <div>
          <h2 className="logInTitle">Log In</h2>
          <hr className="hrLogInTitle mt-1" />
        </div>
        <div className="d-flex justify-content-between">
          <div className="divForm">
            <LogInForm></LogInForm>
            <p className="center">Forgot your password?</p>
            <hr className="mb-3" />
            <Link to={'/signup'} className="center link">
              <button className="btn btn-success">Create new account</button>
            </Link>
          </div>
          <div className="divButtons mt-2">
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
