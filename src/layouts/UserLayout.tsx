import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function UserLayout() {
    // Giả sử là người dùng đã đăng nhập hoặc chưa
    const isLoggedIn = false;  // Bạn có thể thay đổi trạng thái này để kiểm tra trạng thái đăng nhập

    return (
        <div className=" bg-light">
            {/* Header */}
            <nav
                className="navbar navbar-expand-lg shadow-sm vw-100"
                style={{
                    background: 'linear-gradient(90deg, #FF6F61, #FF9671)',
                    color: '#fff',
                }}
            >
                <div className="container">
                    {/* Logo */}
                    <Link className="navbar-brand text-white fw-bold" to={""} id="logo">
                        <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>F</span>
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
                        style={{ borderColor: '#fff' }}
                    >
                        <span className="navbar-toggler-icon" style={{ color: '#fff' }}></span>
                    </button>

                    {/* Navigation Links */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={""}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={""}>Shop</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle text-white"
                                    to={""}
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Categories
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={""}>Men</Link></li>
                                    <li><Link className="dropdown-item" to={""}>Women</Link></li>
                                    <li><Link className="dropdown-item" to={""}>Kids</Link></li>
                                    <li><Link className="dropdown-item" to={""}>Accessories</Link></li>
                                    <li><Link className="dropdown-item" to={""}>Shoes</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={""}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={""}>Contact</Link>
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
                            <button
                                className="btn btn-light text-primary"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>

                        {/* User Actions (Login/Profile) */}
                        <div className="d-flex align-items-center mx-2">
                            {!isLoggedIn ? (
                                <>
                                    <Link to="/login" className="btn btn-light text-primary me-2">
                                        <i className="fas fa-sign-in-alt"></i> Login
                                    </Link>
                                    <Link to="/register" className="btn btn-light text-primary">
                                        <i className="fas fa-user-plus"></i> Register
                                    </Link>
                                </>
                            ) : (
                                <Link to="/profile" className="btn btn-light text-primary">
                                    <i className="fas fa-user"></i> Profile
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="mt-4">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3 mt-4">
                <p className="mb-0">© 2024 Fashion Shop. All Rights Reserved.</p>
                <p className="small">Follow us:
                    <a href="#" className="text-light ms-2">Facebook</a> |
                    <a href="#" className="text-light ms-2">Instagram</a> |
                    <a href="#" className="text-light ms-2">Twitter</a>
                </p>
            </footer>
        </div>
    );
}

export default UserLayout;
