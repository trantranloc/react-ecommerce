import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import authApi from "../api/authApi";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../context/CartContext";
import UserHeader from "./UserHeader";
import UserNavbar from "./UserNavbar";

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
        
        <div className="bg-light">
            <UserHeader />
            <UserNavbar/>
            {/* Main Content */}
            <main className="mt-4 min-vh-100">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3 mt-4">
                <p className="mb-0">© 2024 Fashion Shop. All Rights Reserved.</p>
                <p className="small">
                    Follow us:
                    <Link to="#" className="text-light ms-2">
                        Facebook
                    </Link>{" "}
                    |
                    <Link to="#" className="text-light ms-2">
                        Instagram
                    </Link>{" "}
                    |
                    <Link to="#" className="text-light ms-2">
                        Twitter
                    </Link>
                </p>
            </footer>
        </div>
    );
}

export default UserLayout;
