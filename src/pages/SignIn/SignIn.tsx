import NavButton from "../../components/auth/NavButton";
import Heading from "../../components/auth/Heading";
import LoginForm from "../../components/auth/LoginForm";

const SignIn = () => {

    return (
        <>
            <Heading marginTop={8} text="Sign in" />
            <LoginForm />
            <div className="w-[700px] min-h-[180px] bg-white shadow-lg flex flex-col items-center justify-between p-6 mt-8">
                <Heading marginTop={0} text="New user" />
                <NavButton route="/auth/signup" text="Create account"/>
            </div>
        </>
    )
};

export default SignIn;