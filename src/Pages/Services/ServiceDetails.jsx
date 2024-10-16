import banner from '../../assets/banner.jpg'
import offer from '../../assets/offer.png'
import Banner from "../Banner/Banner";
import { Link, useLoaderData } from "react-router-dom";
const ServiceDetails = () => {
    const service = useLoaderData();

    const forBanner = {
        name: "Service Details",
        route: "service-details"
    }

    return (
        <section className="home-container">
            <Banner props={forBanner}></Banner>
            <div className="flex gap-5">
                <div className="w-2/3 my-16">
                    <div>
                        <img src={banner} alt="" className="rounded-xl " />
                    </div>
                    <h1 className="text-2xl font-semibold my-3">{service?.title}</h1>
                    <p>{service?.description}</p>
                    <div className="grid grid-cols-2 gap-5 my-6">
                        {service?.facility.map(data => <>
                            <div className="rounded-xl border-t-2 border-[#FF3811] bg-gray-200 p-5">
                                <h3 className="text-lg font-bold mb-3">{data?.name}</h3>
                                <p>{data?.details}</p>
                            </div>
                        </>)}
                    </div>
                </div>
                <div className="w-1/3 my-16">
                    <div className="bg-gray-200 p-10 rounded-xl">
                        <h2 className="text-xl font-bold my-2">Services</h2>
                        <p className="px-3 py-2 bg-[#FF3811] text-white font-semibold rounded-lg">Full Car Repair</p>
                        <p className="px-3 py-2 bg-white my-5 font-semibold rounded-lg">Full Car Repair</p>
                        <p className="px-3 py-2 bg-white my-5 font-semibold rounded-lg">Full Car Repair</p>
                        <p className="px-3 py-2 bg-white my-5 font-semibold rounded-lg">Full Car Repair</p>
                        <p className="px-3 py-2 bg-white my-5 font-semibold rounded-lg">Full Car Repair</p>
                    </div>
                    <div className="bg-black p-7 rounded-xl my-5">
                        <img src={offer} alt="" />
                    </div>
                    <h1 className="text-3xl font-semibold my-5">Price: ${service?.price}</h1>
                    <Link to={`/check-out/${service?._id}`}>
                        <button className="button w-full">Procced Checkout</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;