import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import authApi from "../api/authApi";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../context/CartContext";
import UserHeader from "./UserHeader";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";

function UserLayout() {
    const [loading, setLoading] = useState(false);
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const navigate = useNavigate();
    const { cartItemCount } = useCart();

    const handleLogout = async () => {
        try {
            await authApi.logout();
            setIsLoggedIn(false);
            navigate("/login");
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

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
