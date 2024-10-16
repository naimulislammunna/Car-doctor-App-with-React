import { useEffect, useState } from "react";
import Service from "./Service";

const ServiceArea = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:2000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className="home-container">
                <h1 className="text-3xl font-bold text-center mt-10">Our Service Area</h1>
                <p className="text-center w-1/2 mx-auto mt-3 mb-5">{"the majority have suffered alteration in some form, by injected humour, or randomised  words which don't look even slightly believable."}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        services.map((data, idx) => <Service key={idx} data={data}></Service>)
                    }
                </div>
                <div className="text-center my-5">
                    <button className="button-2">More Service</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceArea;