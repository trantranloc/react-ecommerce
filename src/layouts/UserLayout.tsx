import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import authApi from "../api/authApi";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../context/CartContext";

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
            <nav
                className="navbar navbar-expand-lg shadow-sm"
                style={{
                    background: "linear-gradient(90deg, #FF6F61, #FF9671)",
                    color: "#fff",
                }}
            >
                <div className="container">
                    {/* Logo */}
                    <Link className="navbar-brand text-white fw-bold" to="/" id="logo">
                        <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>F</span>
                        ashion <span>Shop</span>
                    </Link>

                    {/* Menu Toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{ borderColor: "#fff" }}
                    >
                        <span className="navbar-toggler-icon" style={{ color: "#fff" }}></span>
                    </button>

                    {/* Navigation Links */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/products">
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle text-white"
                                    to="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Categories
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/category/men">
                                            Men
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/category/women">
                                            Women
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/category/kids">
                                            Kids
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/category/accessories">
                                            Accessories
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/category/shoes">
                                            Shoes
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        {/* Search Form */}
                        <form className="d-flex" id="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search for products..."
                                aria-label="Search"
                            />
                            <button className="btn btn-light text-primary" type="submit">
                                Search
                            </button>
                        </form>

                        {/* Cart Icon */}
                        <div className="d-flex align-items-center mx-2 position-relative">
                            <Link to="/carts" className="btn btn-light text-primary position-relative">
                                <i className="fas fa-shopping-cart fa-lg"></i>
                                {cartItemCount > 0 && (
                                    <span
                                        className="badge bg-danger text-white rounded-circle position-absolute top-0 start-100 translate-middle"
                                        style={{ fontSize: "0.75rem" }}
                                    >
                                        {cartItemCount}
                                    </span>
                                )}
                            </Link>
                        </div>

                        {/* User Actions (Login/Profile) */}
                        <div className="d-flex align-items-center mx-2">
                            {isLoggedIn ? (
                                <div className="dropdown">
                                    <button
                                        className="btn btn-light text-primary dropdown-toggle"
                                        type="button"
                                        id="userDropdown"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="fas fa-user"></i> Tài khoản
                                    </button>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="userDropdown"
                                    >
                                        <li>
                                            <Link className="dropdown-item" to="/profile">
                                                Hồ sơ cá nhân
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                onClick={handleLogout}
                                                className="dropdown-item text-danger"
                                                disabled={loading}
                                            >
                                                {loading ? "Đang đăng xuất..." : "Đăng xuất"}
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                    <>
                                        <Link
                                            to="/login"
                                            className="btn btn-light text-primary me-2"
                                        >
                                            <i className="fas fa-sign-in-alt"></i> Login
                                        </Link>
                                        <Link to="/register" className="btn btn-light text-primary">
                                            <i className="fas fa-user-plus"></i> Register
                                        </Link>
                                    </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

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
