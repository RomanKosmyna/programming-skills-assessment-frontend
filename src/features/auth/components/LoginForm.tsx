import { useToast } from "@chakra-ui/react";
import { useAuth } from "../../../providers/useAuth";
import Joi from "joi";
import AccountStatusNav from "./AccountStatusNav";
import { Form } from "../../../components/Form";
import { InputField } from "../../../components/Form/InputField";
import Button from "../../../components/Elements/Button/Button";

type LoginFormsInputs = {
    username: string;
    password: string;
};

const schema = Joi.object({
    username: Joi.string()
        .min(4)
        .max(8)
        .required(),
    password: Joi.string()
        .min(6)
        .max(12)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/)
        .required(),
});

export default function LoginForm() {
    const { loginUser } = useAuth();
    const toast = useToast();

    const handleLogin = (data: LoginFormsInputs) => {
        loginUser(data, toast);
    };

    return (
        <div className="w-full mt-16 flex flex-col items-center">
            <h1 className="font-bold text-[40px]">Create your account</h1>
            <AccountStatusNav
                text="Do not have an account yet?"
                linkRoute="/auth/register"
                linkText="Create one"
            />
            <Form className={"w-[450px] bg-main rounded-lg shadow-authForm p-4 mt-4"} schema={schema} onSubmit={handleLogin}>
                {({ register, formState }) => (
                    <>
                        <InputField
                            type="text"
                            label="Username"
                            error={formState.errors.username}
                            registration={register("username")}
                        />
                        <InputField
                            type="password"
                            label="Password"
                            error={formState.errors.password}
                            registration={register("password")}
                        />
                        <div className="flex justify-center">
                            <Button variant="primary" className="mt-6 text-main px-7 py-2 rounded-md" text="Log In" type="submit" />
                        </div>
                    </>
                )}
            </Form>
        </div>
    )
}