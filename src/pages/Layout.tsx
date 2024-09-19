import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex flex-col items-center min-h-screen px-4">
            <Outlet />
        </div>
    );
};

export default Layout;
