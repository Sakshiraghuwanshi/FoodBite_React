import React, { Children } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./compontents/Header";
import Body from "./compontents/Body";
import Footer from "./compontents/Footer";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import About from "./compontents/About";
import Error from "./compontents/Error";
import Contact from "./compontents/Contact";
import RestaurantMenu from "./compontents/RestaurantMenu";
import Profile from "./compontents/Profile";

const AppLayout=()=>{
    return(
        <>
        <Header/>
       <Outlet/>
        <Footer/>
        </>
    );
};

const AppRouter = createBrowserRouter ([
    {
       path:"/",
       element: <AppLayout/>,
       errorElement : <Error/>,
       children : [
        {
            path:"/",
            element: <Body/>
         },
        {
            path:"/about",
            element: <About/>,
            children :[
                {
                    path:"Profile",
                    element: <Profile/>
                },
            ]
         },
         {
            path:"/contact",
            element: <Contact/>
         },
         {
            path:"/restaurant/:id",
            element: <RestaurantMenu/>
         },
       ]
       }  
        

       
    
    

])

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {AppRouter}/>);