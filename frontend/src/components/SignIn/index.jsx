export default function SignIn() {
    return (
        <div>
            <h2>Sign In</h2>
            <div>
                <form action="" method="post">
                    <ul>
                        <li>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="userName" name="userName"/>
                        </li>
                        <li>
                            <label htmlFor="name">Email:</label>
                            <input type="email" id="userEmail" name="userEmail"/>
                        </li>
                    </ul>
                </form>
                <p>Dont have an acount?</p>
                <p>Register</p>
            </div>
        </div>
    )
}