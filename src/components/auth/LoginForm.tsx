import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form className="w-[700px] min-h-[400px] bg-white shadow-lg flex flex-col items-center justify-between p-6 mt-8"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full flex flex-col">
                <label htmlFor="username" className="font-medium text-[18px]">Username</label>
                <input type="text" placeholder="Username"
                    className="h-12 rounded-md px-2 mt-1 border-solid border-2 border-gray-600"
                    {...register("username", { required: true })} />
                {errors.username && <span className="font-medium text-red-600">This field is required.</span>}
                <div className="w-full">
                    <Link to={"/"}
                        className="inline-block font-bold mt-1 text-lg text-[#40A2E3] hover:text-[#306CAD] hover:underline">Forgot username?</Link>
                </div>
            </div>
            <div className="w-full flex flex-col mt-8">
                <label htmlFor="password" className="font-medium text-[18px]">Password</label>
                <input type="password" placeholder="Password"
                    className="h-12 rounded-md px-2 mt-1 border-solid border-2 border-gray-600"
                    {...register("password", { required: true })} />
                {errors.password && <span className="font-medium text-red-600">This field is required.</span>}
                <div className="w-full">
                    <Link to={"/"}
                        className="inline-block font-bold mt-1 text-lg text-[#40A2E3] hover:text-[#306CAD] hover:underline">Forgot password?</Link>
                </div>
            </div>
            <button
                type="submit"
                value="submit"
                className="w-[224px] h-[58px] bg-[#008DDA] rounded-full mt-8 hover:bg-[#0066A3]"
            >
                <span className="font-bold text-lg text-white">Sign in</span>
            </button>
        </form>
    )
}