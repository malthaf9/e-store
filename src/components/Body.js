import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";



const Body = () => {
    return (
        <div>
            <div className="">
            <Header />
            <Outlet />
            </div>
        </div>
    )
}

export default Body;