import AuthWindow from "../../components/auth/AuthWindow";
import LoginForm from "../../components/auth/LoginForm";

const SignIn = () => {

    return (
        <>
            <AuthWindow heading="Sign In">
                <LoginForm />
            </AuthWindow>
        </>
    )
};

export default SignIn;