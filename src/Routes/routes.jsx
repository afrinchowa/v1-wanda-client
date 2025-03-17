import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Users from "../Users/Users";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/signup',
            element:<SignUp/>
        },
        {
            path:'/users',
            element:<Users/>,
            loader:()=>fetch('http://localhost:5000/users')
        },
    ]
  },
]);
