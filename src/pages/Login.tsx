import { useForm, SubmitHandler } from "react-hook-form";
import { logo } from "../utils/images/logo";
import { Link, useNavigate } from "react-router-dom";
import { usePostUserLoginMutation } from "../redux/api/api";
import { ErrorAlert } from "../components/ui/Alerts/ErrorAlert";
import { SuccessAlert } from "../components/ui/Alerts/SuccessAlert";
import ErrorCommon from "../components/ui/Error/ErrorCommon";
import Loading from "../components/ui/Loadings/Loading";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { loginSuccess, loginFailure } from "../redux/features/user/userSlice";

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

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { currentUser } = useAppSelector((state) => state.user);

    const onSubmit: SubmitHandler<TLoginUser> = async (data: TLoginUser) => {
        try {
            const response = await postUserLogin(data).unwrap();

            console.log(response.data);

            if (response && response.success) {
                // Update user state
                dispatch(loginSuccess(response.data));

                // set data on session storage
                // Store the user data in localStorage for persistence
                localStorage.setItem(
                    "currentUser",
                    JSON.stringify(response.data)
                );

                // Show success alert
                await SuccessAlert("Login Successful" + currentUser?.name);
                navigate("/");
            }
        } catch (error) {
            console.error("Login Error: ", error);
            dispatch(loginFailure(error?.data?.message || "Login failed"));
            ErrorAlert();
        }
    };

    if (isLoadingUserLogin) {
        return <Loading />;
    }

    if (isError) {
        return <ErrorCommon />;
    }

    return (
        <div className="bg-sky-100 flex justify-center items-center h-screen">
            <div className="w-1/2 h-screen hidden lg:flex justify-center items-center">
                <Link to={"/"}>
                    <img
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
                        <label htmlFor="email" className="block text-gray-600">
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
    );
};

export default Login;
