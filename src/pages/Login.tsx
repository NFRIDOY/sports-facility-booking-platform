import { useForm, SubmitHandler } from "react-hook-form";
import { logo } from "../utils/images/logo";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

type Inputs = {
    email: string;
    password: string;
};
const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);

        // send data to server use RTK

        // alert

        toast.success("Successfully toasted!");
    };

    console.log(watch("email")); // watch input value by passing the name of it

    return (
        <>
            <div className="bg-sky-100 flex justify-center items-center h-screen">
                <div className="w-1/2 h-screen hidden lg:flex justify-center items-center ">
                    <img
                        // src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
                        src={logo}
                        alt="Placeholder Image"
                        className="object-cover size-96"
                    />
                </div>

                <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                    <h1 className="text-2xl font-semibold mb-4">Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4 bg-sky-100">
                            <label
                                htmlFor="email"
                                className="block text-gray-600">
                                Email{" "}
                                <span className="text-red-500">
                                    {errors.email && "is required"}
                                </span>
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                id="email"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-gray-800">
                                Password{" "}
                                <span className="text-red-500">
                                    {errors.password && "is required"}
                                </span>
                            </label>
                            <input
                                type="password"
                                {...register("password", { required: true })}
                                id="password"
                                name="password"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">
                            Login
                        </button>
                    </form>

                    <div className="mt-6 text-green-500 text-center">
                        <Link to={"/register"} className="hover:underline">
                            Sign up Here
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
