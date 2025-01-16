import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root";
import Home from "../Layouts/Home";
import Menu from "../Layouts/Menu";
import OurShop from "../Layouts/OurShop";
import Contact from "../Layouts/Contact";
import Auth from "../Layouts/Auth";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../DashBoardPages/Cart";
import PrivateRoute from "../Private/PrivateRoute";
import AllUsers from "../DashBoardPages/AllUsers";
import AdminRoute from "../Private/AdminRoute";
import AddItems from "../DashBoardPages/AddItems";
import AllItems from "../DashBoardPages/AllItems";
import UpdateItem from "../DashBoardPages/UpdateItem";
import Payment from "../DashBoardPages/Payment/Payment";
import Transactions from "../DashBoardPages/Transactions";
import UserHome from "../DashBoardPages/UserHome";
import AdminHome from "../DashBoardPages/AdminHome";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/ourmenu',
                element: <Menu/>,
            },
            {
                path: '/ourshop',
                element: <OurShop/>,
            },
            {
                path: '/contact',
                element: <Contact/>,
            }
            
        ]
    },
    {
        path: '/auth',
        element: <Auth/>,
        children:[
            {
                path: '/auth',
                element: <Login/>
            },
            {
                path: '/auth/register',
                element: <Register/>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard/>,
        children:[
            {
                path: '/dashboard/userHome',
                element: <PrivateRoute><UserHome/></PrivateRoute>
            },
            {
                path: '/dashboard/cart',
                element: <PrivateRoute><Cart/></PrivateRoute>
            },
            {
                path: '/dashboard/pay',
                element: <PrivateRoute><Payment/></PrivateRoute>
            },
            {
                path: '/dashboard/payHistory',
                element: <PrivateRoute><Transactions/></PrivateRoute>
            },

            // admin routes
            {
                path: '/dashboard/adminHome',
                element: <AdminRoute><AdminHome/></AdminRoute>
            },
            {
                path: '/dashboard/additem',
                element: <AdminRoute><AddItems/></AdminRoute>
            },
            {
                path: '/dashboard/manage',
                element: <AdminRoute><AllItems/></AdminRoute>
            },
            {
                path: '/dashboard/updateItem/:id',
                loader: ({params}) => fetch(`https://bistro-boss-server-kohl-ten.vercel.app/menu/${params.id}`) ,
                element: <AdminRoute><UpdateItem/></AdminRoute>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers/></AdminRoute>
            },
        ]
    },
]);