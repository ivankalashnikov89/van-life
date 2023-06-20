import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <h1>Hello Layout</h1>
            <Outlet />
        </>
        
    )
}

export default Layout;