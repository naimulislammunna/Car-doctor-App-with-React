import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MdDelete } from "react-icons/md";
const SingleOrder = ({ item }) => {
    const { _id, img, name, date, amount } = item;

    const handleDelete = () => {
        const query = useQuery({
            queryKey: ['delete'],
            queryFn: () => {
                const procced = confirm('are you sure delete');
                if (procced) {
                    const response = axios.delete(`http://localhost:2000/my-service/${_id}`)
                    console.log(response);
                    
                }
            }
        })
        console.log(query);

    }
    return (
        <tr className="hover:bg-gray-50 border-b transition duration-300">
            <td className="py-4 px-4 flex justify-start">
                <img src={img} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
            </td>
            <td className="py-4 px-6 border-b text-xl font-medium">{name}</td>
            <td className="py-4 px-6 border-b text-xl font-medium">{date}</td>
            <td className="py-4 px-6 border-b text-lg font-medium">${amount}</td>
            <td className="py-4 px-6 border-b ">
                <button className="button">Pending</button>
                <button onClick={handleDelete} className="button my-auto ml-4 cursor-pointer"><MdDelete /></button>
            </td>
        </tr>
    );
};

export default SingleOrder;