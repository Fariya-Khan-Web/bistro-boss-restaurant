import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root";
import Home from "../Layouts/Home";
import Menu from "../Layouts/Menu";
import OurShop from "../Layouts/OurShop";
import Contact from "../Layouts/Contact";


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
]);