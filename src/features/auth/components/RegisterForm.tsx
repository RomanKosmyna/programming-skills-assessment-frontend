import { useForm } from "react-hook-form";
import { useAuth } from "../../../providers/useAuth";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useToast } from "@chakra-ui/react";

type RegisterFormsInputs = {
    username: string;
    email: string;
    password: string;
};

const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
});

export default function RegisterForm() {
    const { registerUser } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormsInputs>({ resolver: joiResolver(schema) });
    const toast = useToast();
    
    const handleRegister = (data: RegisterFormsInputs) => {
        // try {
        //     registerUser(data);
        //     toast({
        //         title: "Registration Status",
        //         description: "You have successfully registered.",
        //         status: "success",
        //         duration: 3000,
        //         isClosable: true
        //     });
        // } catch (error) {
        //     toast({
        //         title: 'Registration Error',
        //         description: 'An error occurred during registration.',
        //         status: 'error',
        //         duration: 3000,
        //         isClosable: true,
        //     });
        // }
        registerUser(data, toast);
    };

    return (
        <div>
            <h1>Register</h1>
            <form className="mt-10" onSubmit={handleSubmit(handleRegister)}>
                <div className="flex flex-col">
                    <label htmlFor="username">Username</label>
                    <input {...register("username")} type="text" className="bg-[#666] text-main" />
                    {errors && <span>{errors.username?.message}</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input {...register("email")} type="email" className="bg-[#666] text-main" />
                    {errors && <span>{errors.email?.message}</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input {...register("password")} type="password" className="bg-[#666] text-main" />
                    {errors && <span>{errors.password?.message}</span>}
                </div>
                <button type="submit" className="bg-lime-700 mt-3 px-4 py-2">Register</button>
            </form>
        </div>
    )
}