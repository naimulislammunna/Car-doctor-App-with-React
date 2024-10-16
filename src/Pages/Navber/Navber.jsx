import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const Navber = () => {
    const { logOut, userInfo } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
    }

    const items = <>
        <NavLink to='/'><button className="text-lg font-semibold">Home</button></NavLink>
        <NavLink to='/about'><button className="text-lg font-semibold">About</button></NavLink>
        <NavLink to='/checkOut'><button className="text-lg font-semibold">Service</button></NavLink>
        <NavLink to='/blog'><button className="text-lg font-semibold">Blog</button></NavLink>
        {
            userInfo && 
            <NavLink to='/my-service'><button className="text-lg font-semibold">My service</button></NavLink>
        }
    </>
    return (
        <div className="home-container">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {items}
                        </ul>
                    </div>
                    <Link to='/'><img src="https://i.postimg.cc/xjWXyZbM/Group-2.png" alt="" className="w-20" /></Link>
                </div>
                <div className="navbar-center hidden sm:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {items}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    {
                        userInfo ? <>
                            <button onClick={handleLogOut} className="button-2">Log Out</button>
                        </>
                            : <>
                                <NavLink to='/register'><button className="text-lg font-semibold button-2">Appointment</button></NavLink>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;