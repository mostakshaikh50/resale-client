import {createBrowserRouter} from "react-router-dom"
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main"
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Home from "../../Pages/Home/Home/Home"
import Products from "../../Pages/Home/Products/Products";
import Login from "../../Pages/Login/Login";
import Blog from "../../Pages/Shared/Navbar/Blog";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/products/:id',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            }
            
        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path:'/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path:'/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path:'/dashboard/myproduct',
                element: <MyProducts></MyProducts>
            }
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <AdminRoute><Payments></Payments></AdminRoute>,
            //     loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)

            // }
        ]
    }
])

export default router;