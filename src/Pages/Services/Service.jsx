import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = ({ data }) => {
    const { _id, title, price, img } = data;
    return (
        <div className="rounded-lg p-5 border border-gray-400">
            <img src={img} alt="" className="rounded-lg w-full h-[65%]" />
            <h2 className="text-2xl font-bold my-2">{title}</h2>
            <div className="flex justify-between mt-3">
                <p className="text-lg font-semibold text-[#FF3811] ">Price: ${price}</p>
                <Link to={`/services/${_id}`}>
                    <p className="text-[#FF3811] p-2 cursor-pointer rounded-full hover:bg-[#FF3811] hover:text-white text-2xl"><FaArrowCircleRight/></p>
                </Link>
            </div>
        </div>
    );
};

export default Service;