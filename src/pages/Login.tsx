import { useForm, SubmitHandler } from "react-hook-form";
import { logo } from "../utils/images/logo";
import { Link, useNavigate } from "react-router-dom";
import { usePostUserLoginMutation } from "../redux/api/api";
import { ErrorAlert } from "../components/ui/Alerts/ErrorAlert";
import { SuccessAlert } from "../components/ui/Alerts/SuccessAlert";
import ErrorCommon from "../components/ui/Error/ErrorCommon";
import Loading from "../components/ui/Loadings/Loading";

export type TLoginUser = {
    email: string;
    password: string;
};
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TLoginUser>();

    const [
        postUserLogin,
        { data: postUserLoginData, isLoading: isLoadingUserLogin, isError },
    ] = usePostUserLoginMutation();

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<TLoginUser> = async (data: TLoginUser) => {
        // console.log(data);

        // send data to server use RTK
        const res = await postUserLogin(data).unwrap();
        // console.log(result);
        // await console.log("postUserLoginData : ", postUserLoginData);
        // console.log("postUserLoginData : ", postUserLoginData);
        // await console.log("isLoading : ", isLoadingUserLogin);

        // alert
        if (await isError) {
            console.log("Error: " + data);
            ErrorAlert();
            return;
        }
        if(isLoadingUserLogin) {
            console.log("object")
        }
        // await postUserLoginData;
        if (await !isLoadingUserLogin) {
            // console.log("Success: ", postUserLoginData?.success);
            console.log("postUserLoginData : ", await res.data);
            // console.log("postUserLoginData : ", await isLoadingUserLogin);
            await SuccessAlert("Login Successful");
            /** Check user Or admin */
            if(postUserLoginData)
            navigate("/")
        }
    };

    // console.log(watch("email")); // watch input value by passing the name of it

    if (isLoadingUserLogin) {
        return <Loading />;
    }

    if (isError) {
        // ErrorAlert();
        return <ErrorCommon />;
    }

    return (
        <>
            <div className="bg-sky-100 flex justify-center items-center h-screen">
                <div className="w-1/2 h-screen hidden lg:flex justify-center items-center ">
                    <Link to={"/"}>
                        <img
                            // src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
                            src={logo}
                            alt="Placeholder Image"
                            className="object-cover size-96"
                        />
                    </Link>
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
