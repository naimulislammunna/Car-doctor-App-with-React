import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import Banner from "../Banner/Banner";
import SingleOrder from "./singleOrder";
import axios from "axios";
import Loader from "../../Components/Loader";
import { useQuery } from "@tanstack/react-query";

const OrderServices = () => {
    const [order, setOrder] = useState([]);
    const { userInfo, loading } = useContext(AuthContext);
    const { email } = userInfo;


    // const {data, refetch} = useQuery({
    //     queryKey: ['delete'],
    //     queryFn: () => {
    //         const procced = confirm('are you sure delete');
    //         if (procced) {
    //             const response = axios.delete(`http://localhost:2000/my-service/${_id}`)
                
    //         }
    //     }
    // })
    // console.log(data);

    useEffect(() => {
        const uri = `http://localhost:2000/my-service?email=${email}`
        axios.get(uri, {
            withCredentials: true
        })
            .then(data => setOrder(data.data))

    }, [loading])
    console.log(order);
    
    const forBanner = {
        name: "Order Details",
        route: "order details"
    }
    if (loading) return <Loader />
    return (
        <div className="home-container">
            <Banner props={forBanner}></Banner>
            <div>

                <div className="overflow-x-auto">
                    <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                        <thead>
                            <tr className="bg-[#0095FF] text-white">
                                <th className="py-4 px-6 text-lg text-left border-b">Service Image</th>
                                <th className="py-4 px-6 text-lg text-left border-b">Service Name</th>
                                <th className="py-4 px-6 text-lg text-left border-b">Date</th>
                                <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                                <th className="py-4 px-6 text-lg border-b text-end">Pending</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order?.map(item => <SingleOrder key={item._id} item={item}></SingleOrder>)
                            }
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
};

export default OrderServices;