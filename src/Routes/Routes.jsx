import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import OrderServices from "../Pages/OrderServices/OrderServices";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:2000/services/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/check-out/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:2000/check-out/${params.id}`)
            },
            {
                path: '/my-service',
                element: <OrderServices></OrderServices>
            }
        ]
    }
])

export default router;