import React from "react";
import UserHeader from "./UserHeader";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
import { Outlet } from "react-router-dom";

function UserLayout() {
    return (

        <div className="bg-white">
            {/* Hearder */}
            <UserHeader />
            <UserNavbar />
            {/* Main Content */}
            <main className=" container mx-auto mt-4 min-vh-100">
                <Outlet />
            </main>
            {/* Footer */}
            <UserFooter />
        </div>
    );
}

export default UserLayout;
