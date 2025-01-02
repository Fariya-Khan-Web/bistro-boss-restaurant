import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root";
import Home from "../Layouts/Home";
import Menu from "../Layouts/Menu";


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
                path: '/',
                element: <Home/>,
            },
            {
                path: '/',
                element: <Home/>,
            },
            
        ]
    },
]);