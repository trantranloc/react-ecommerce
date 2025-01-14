import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import MiniCart from "../../components/MiniCart";

export default function UserHeader() {
    const { cartItemCount } = useCart();
    return (
        // Header
        <header className="bg-white shadow-lg">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className="logo">
                    <Link className="navbar-brand font-bold text-2xl text-primary" to="/" id="logo">
                        <span className="text-primary text-2xl">Fashion</span> Shop
                    </Link>
                </div>

                {/* Search and Button */}
                <div className="hidden lg:flex items-stretch w-full max-w-lg ">
                    {/* Input */}
                    <input
                        type="search"
                        className="w-full pl-10 pr-4 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Tìm kiếm sản phẩm..."
                    />
                    {/* Search Button */}
                    <div className="bg-green-500 flex items-center justify-center text-white px-6 rounded-r-lg hover:bg-opacity-80">
                        <p className="m-0">SEARCH</p>
                    </div>


                </div>


                {/* User Info */}
                <div className="user-info flex items-center space-x-6">
                    {/* Favorite Icon */}
                    <div className="relative">
                        <Link to="/favorites" className="text-gray-600 hover:text-primary">
                            <i className="fas fa-heart text-2xl"></i>
                        </Link>
                        <span className="absolute bottom-4 left-4 px-2 py-1 text-xs text-white bg-red-500 rounded-full">
                            3
                        </span>
                    </div>


                    {/* Cart Icon */}
                    <div className="relative group">
                        <span  className="text-gray-600 hover:text-primary">
                            <i className="fas fa-shopping-cart text-2xl"></i>
                        </span>
                        <span className="absolute bottom-4 left-4 px-2 py-1 text-xs text-white bg-red-500 rounded-full">
                            {cartItemCount}
                        </span>
                        <MiniCart />
                    </div>
                    {/* User Avatar or Profile */}
                    <div className="relative group">

                        <span className="text-gray-600 hover:text-primary cursor-pointer flex items-center">
                            <i className="fas fa-user-circle text-2xl"></i>
                            <i className="fas fa-chevron-right text-sm ml-2 text-gray-600 transform group-hover:rotate-90 transition-transform duration-300 ease-in-out"></i>
                        </span>


                        <div className="absolute z-20 right-0 top-full w-72 p-6 bg-white shadow-lg hidden group-hover:block transition-opacity duration-300 delay-150">
                            <b className="text-bold text-lg text-primary">Chào mừng bạn</b>

                            <div className="flex justify-around items-center mt-4 w-full max-w-lg mx-auto gap-2">
                                <Link to={"/login"} className="bg-blue-500 border-2 border-blue-500 text-center rounded-sm px-6 py-2 w-full text-white no-underline hover:bg-blue-600 transition-colors duration-200">
                                    Login
                                </Link>
                                <Link to={"/register"} className="bg-transparent border-2 border-blue-500 text-center rounded-sm px-6 py-2 w-full text-blue-500 no-underline hover:bg-blue-500 hover:text-white transition-colors duration-200">
                                    Register
                                </Link>
                            </div>

                            <div className="flex flex-col space-y-3 mt-4">
                                <Link to="/my-account" className="flex no-underline items-center text-gray-600 hover:text-blue-500 transition-colors duration-200">
                                    <i className="fas fa-user text-lg mr-2"></i> My Account
                                </Link>
                                <Link to="/my-orders" className="flex no-underline items-center text-gray-600 hover:text-blue-500 transition-colors duration-200">
                                    <i className="fas fa-box text-lg mr-2"></i> My Orders
                                </Link>
                                <Link to="/my-wishlist" className="flex no-underline items-center text-gray-600 hover:text-blue-500 transition-colors duration-200">
                                    <i className="fas fa-heart text-lg mr-2"></i> My Wishlist
                                </Link>
                                <Link to="/auth/logout" className="flex no-underline items-center text-gray-600 hover:text-red-500 transition-colors duration-200">
                                    <i className="fas fa-sign-out-alt text-lg mr-2 text-red"></i> Logout
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </header>
    );
}
