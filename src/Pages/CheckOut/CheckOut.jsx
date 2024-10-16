import axios from "axios";
import Banner from "../Banner/Banner";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Loader from "../../Components/Loader";
import toast, { Toaster } from "react-hot-toast";

const CheckOut = () => {
    const { userInfo, loading } = useContext(AuthContext);
    const service = useLoaderData();

    const { title, img } = service;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const gmail = form.gmail.value;
        const amount = form.amount.value;


        const response = await axios.post('http://localhost:2000/checkout', { name, date, gmail, amount, img, title });
        if (response.data.acknowledged) {
            toast.success('Order Successfully')
            form.reset()
        }
        

    }
    const forBanner = {
        name: "CheckOut",
        route: "checkout"
    }
    if (loading) return <Loader />
    return (
        <div className=" home-container">
            <Banner props={forBanner}></Banner>
            <div className="bg-[#F4F3F0] my-10 p-10">
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div>
                    <h2 className="text-lg font-bold text-center">Service Name: {service?.title}</h2>
                </div>
                <div className="mx-20 py-10">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2 text-sm">
                                <label className="text-sm font-serif font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="first_name">
                                    Name
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                    id="first_name"
                                    placeholder="Enter first name"
                                    name="name"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="space-y-2 text-sm">
                                <label className="font-serif text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="first_name">
                                    Date
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                    id="first_name"
                                    placeholder="Enter first name"
                                    name="date"
                                    type="date"
                                    required
                                />
                            </div>
                            <div className="space-y-2 text-sm">
                                <label className="font-serif text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="first_name">
                                    Gmail
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                    id="first_name"
                                    defaultValue={userInfo?.email}
                                    placeholder="Enter Gmail"
                                    name="gmail"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="space-y-2 text-sm">
                                <label className="font-serif text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="first_name">
                                    Amount
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                    id="first_name"
                                    defaultValue={`$ ${service?.price}`}
                                    placeholder="Enter first name"
                                    name="amount"
                                    type="text"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2 text-sm mt-3">
                            <label className="font-serif text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="email">
                                Description
                            </label>
                            <input
                                className="flex h-32 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                id="email"
                                placeholder="Enter your email"
                                name="description"
                                type="text"
                            />
                        </div>
                        <div>
                            <button type="submit" className="button my-4 w-full">Order Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;