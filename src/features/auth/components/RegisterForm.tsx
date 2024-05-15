import { useToast } from "@chakra-ui/react";
import { useAuth } from "src/providers/useAuth";
import Joi from "joi";
import AccountStatusNav from "./AccountStatusNav";
import { Form } from "@components/Form";
import { InputField } from "@components/Form/InputField";
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
        .required()
        .messages({
            'string.empty': `This field cannot be empty`,
            'string.min': `Username should have a minimum length of 4`,
            'string.max': `Username should have a maximum length of 8`,
            'any.required': `This field is required`
        }),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.empty': `This field cannot be empty`,
            'string.email': `Email must be a valid email address`,
            'any.required': `This field is required`
        }),
    password: Joi.string()
        .min(6)
        .max(12)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/)
        .required()
        .messages({
            'string.empty': `This field cannot be empty`,
            'string.min': `Password should have a minimum length of 6`,
            'string.max': `Password should have a maximum length of 12`,
            'object.regex': `Password should have one uppercase, one lowercase, one digit, and one special character`,
            "string.pattern.base": "Password should have one uppercase, one lowercase, one digit, and one special character",
            'any.required': `This field is required`
        }),
});

export default function RegisterForm() {
    const { registerUser } = useAuth();
    const toast = useToast();

    const handleRegister = (data: RegisterFormsInputs) => {
        registerUser(data, toast);
    };

    return (
        <div className="w-full mt-16 flex flex-col items-center">
            <h1 className="font-bold text-mainDark dark:text-darkHeading text-[40px]">Create your account</h1>
            <AccountStatusNav
                text="Already have an account?"
                linkRoute="/auth/login"
                linkText="Log In"
            />
            <div className={"w-[450px] bg-mainWhite dark:bg-darkAccent1 rounded-lg shadow-authForm dark:shadow-none dark:border dark:border-darkBorder p-4 mt-4"}>
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
                                <button
                                    className="bg-green-700 px-6 py-2 mt-10 font-bold text-xl 
                                text-mainWhite flex justify-center rounded-lg transition-opacity hover:opacity-90"
                                    type="submit"
                                >
                                    Register
                                </button>
                            </div>
                        </>
                    )}
                </Form>
                <GuestLink />
            </div>
        </div>
    )
}