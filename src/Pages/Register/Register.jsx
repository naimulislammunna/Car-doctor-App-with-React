import { useContext } from "react";
import { Link } from "react-router-dom";
import login from '../../assets/login.svg'
import { AuthContext } from "../Auth/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
    const { handleRegister, googleLogIn } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password === confirmPassword) {
            handleRegister(email, password)
                .then(() => toast.success('Register Successfully'))
                .catch(err => console.log(err))
            form.reset();

        }
        else {
            toast.error("Password doesn't match with confirm Password")
        }
    }

    const handlegoogleLogIn = () => {
        googleLogIn()
            .then(() => toast.success('Google log in Successful'))
            .catch(err => console.log(err))
    }

    return (
        <div className="home-container flex gap-10">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="w-1/2 hidden lg:flex">
                <img src={login} alt="" />
            </div>
            <div className="w-1/2 my-10">
                <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
                    <h1 className="text-3xl font-semibold text-center">Resister</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                            <label htmlFor="username" className="block font-medium">
                                Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                                id="username"
                                placeholder="Enter name"
                                name="name"
                                type="text"
                            />
                        </div>
                        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                            <label htmlFor="username_2" className="block font-medium">
                                Email
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                                id="username_2"
                                placeholder="Enter username"
                                name="email"
                                type="email"
                            />
                        </div>
                        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                            <label htmlFor="password_2" className="block font-medium">
                                Password
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                                id="password_2"
                                placeholder="Enter password"
                                name="password"
                                type="password"
                            />
                        </div>
                        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                            <label htmlFor="password_2" className="block font-medium">
                                Confirm Password
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                                id="password_2"
                                placeholder="Enter password"
                                name="confirmPassword"
                                type="password"
                            />
                        </div>
                        <input type="submit" value='Submit' className=" button hover:bg-[#c32c0d] cursor-pointer w-full" />
                    </form>
                    <div className="flex justify-center space-x-4 *:border hover:*:bg-zinc-400/20 *:dark:border-zinc-700">
                        <button onClick={handlegoogleLogIn} aria-label="Log in with Google" className="rounded-full p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>
                        <button aria-label="Log in with GitHub" className="rounded-full p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5 fill-current">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                        </button>
                    </div>
                    <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                        I have an account?
                        <Link to='/signIn'><a className="font-semibold text-[#FF3811]">
                            Sign In
                        </a></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;