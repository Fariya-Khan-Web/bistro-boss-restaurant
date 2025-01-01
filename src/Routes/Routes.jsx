import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root";
import Home from "../Layouts/Home";


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
                path: '/',
                element: <Home/>,
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