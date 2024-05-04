import { useAuth } from "../../../providers/useAuth";
import Joi from "joi";
import { useToast } from "@chakra-ui/react";
import AccountStatusNav from "./AccountStatusNav";
import Button from "../../../components/Elements/Button/Button";
import { Form } from "../../../components/Form";
import { InputField } from "../../../components/Form/InputField";
import GuestLink from "./GuestLink";

type RegisterFormsInputs = {
    username: string;
    email: string;
    password: string;
};

const schema = Joi.object({
    username: Joi.string()
        .min(4)
        .max(8)
        .required(),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
    password: Joi.string()
        .min(6)
        .max(12)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/)
        .required(),
});

export default function RegisterForm() {
    const { registerUser } = useAuth();
    const toast = useToast();

    const handleRegister = (data: RegisterFormsInputs) => {
        registerUser(data, toast);
    };

    return (
        <div className="w-full mt-16 flex flex-col items-center">
            <h1 className="font-bold text-[40px]">Create your account</h1>
            <AccountStatusNav
                text="Already have an account?"
                linkRoute="/auth/login"
                linkText="Log In"
            />
            <div className={"w-[450px] bg-main rounded-lg shadow-authForm p-4 mt-4"}>
                <Form className={"w-full"} schema={schema} onSubmit={handleRegister}>
                    {({ register, formState }) => (
                        <>
                            <InputField
                                type="text"
                                label="Username"
                                error={formState.errors.username}
                                registration={register("username")}
                            />
                            <InputField
                                type="email"
                                label="Email"
                                error={formState.errors.email}
                                registration={register("email")}
                            />
                            <InputField
                                type="password"
                                label="Password"
                                error={formState.errors.password}
                                registration={register("password")}
                            />
                            <div className="flex justify-center">
                                <Button variant="primary" className="mt-6 text-main px-7 py-2 rounded-md" text="Register" type="submit" />
                            </div>
                        </>
                    )}
                </Form>
                <GuestLink />
            </div>
        </div>
    )
}