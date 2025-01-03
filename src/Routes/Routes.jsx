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
            },
            
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
    }
]);