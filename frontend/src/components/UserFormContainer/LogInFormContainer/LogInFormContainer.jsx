import FacebookBtn from "../BtnPassport/FacebookBtn/FacecebookBtn"
import LogInForm from "../LogInForm/LogInForm"
import '../UserFormContainer.css'

export default function LogInFormContainer() {
    return (
        <main className="main pt-5">
            <section className='container-fluid d-flex justify-content-around'>
                    <div className="LogInForm">
                        <h2 className="center mb-3">Log In</h2>
                        <LogInForm></LogInForm>
                        <p className="center">Forgot your password?</p>
                        <hr className="mb-3"/>
                        <div className="center"><button className="btn btn-success">Create new account</button></div>
                    </div>
                    <div className="center">
                        <div className="">
                            <FacebookBtn></FacebookBtn>
                            <div className="mb-5"><button className="btn btn-secondary">Log in with</button></div>
                            <div className="mb-5"><button className="btn btn-danger">Log in with</button></div>
                            <div className="mb-5"><button className="btn btn-warning">Log in with</button></div>
                        </div>
                    </div>
            </section>
        </main>
    )
}