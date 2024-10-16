import { useContext } from "react";
import { AuthContext } from "../Pages/Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader";

const PrivetRoute = ({ children }) => {
    const { userInfo, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <Loader/>
    }
    if (userInfo?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to='/signIn' replace></Navigate>
};

export default PrivetRoute;