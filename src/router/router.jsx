import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import SpecialProducts from "../pages/SpecialProducts";
import TopProducts from "../pages/TopProducts";
import Main from "../layout/Main";

export const router = createBrowserRouter([

    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
        
            {
                path:'/about',
                element:<AboutUs/>
            },
        
            {
                path:'/contact',
                element:<Contact/>
            },
        
            {
                path:'/signin',
                element:<SignIn/>
            },
        
            {
                path:'/signup',
                element:<SignUp/>
            },
        
            {
                path:'/specialProducts',
                element:<SpecialProducts/>
            },
        
            {
                path:'/topProducts',
                element:<TopProducts/>
            }

        ]
    },


    
])


