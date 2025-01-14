import { Link } from "react-router-dom";

export default function UserNavbar() {
    return (
        <nav className="bg-black h-16 hidden md:flex">
            <div className="container mx-auto flex justify-between items-center h-full">
                <div className="text-white text-lg h-full flex items-center justify-start space-x-2 gap-3">
                    <div className="bg-primary relative group text-white text-lg font-bold flex items-center justify-start space-x-2 gap-3 p-3 rounded ">
                        <span className="text-gray-600 cursor-pointer flex items-center space-x-2 gap-3 ">
                            <i className="fas fa-bars text-lg text-white "></i>
                            <p className="text-white m-0">All Categories</p>
                        </span>
                        <div className="absolute z-20 w-44 right-0 top-12 50 p-5"></div>
                        <div className="absolute z-20 w-44 right-0 top-12 50 p-5 bg-white shadow group-hover:block transition-opacity hidden duration-300 delay-100" style={{ marginTop: '10px', marginLeft: '0' }}>
                            <div className="flex flex-col space-y-3 mt-4">
                                <Link to="/my-account" className="flex no-underline items-center text-gray-600 hover:text-blue-500 transition-colors duration-200">
                                    <i className="fas fa-user text-lg mr-2"></i> My Account
                                </Link>
                                <Link to="/my-orders" className="flex no-underline items-center text-gray-600 hover:text-blue-500 transition-colors duration-200">
                                    <i className="fas fa-box text-lg mr-2"></i> My Orders
                                </Link>
                                <Link to="/logout" className="flex no-underline items-center text-gray-600 hover:text-red-500 transition-colors duration-200">
                                    <i className="fas fa-sign-out-alt text-lg mr-2 text-red"></i> Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center p-2 space-x-1 gap-4">
                        <span className="text-gray-600 hover:text-primary cursor-pointer flex items-center">
                            <p className="text-white m-0">Home</p>
                        </span>
                        <div className="relative group">
                            <span className="text-gray-600 hover:text-primary cursor-pointer flex items-center">
                                <p className="text-white m-0">Products</p>
                                <i className="fas fa-chevron-right text-sm ml-2 text-gray-600 transform group-hover:rotate-90 transition-transform duration-300 ease-in-out"></i>
                            </span>
                            <div className="absolute z-20 left-0 top-full w-24 p-5 "></div>
                            <div className="absolute z-20 left-0 top-full w-48 p-5 bg-white shadow-lg hidden group-hover:block transition-opacity duration-300 delay-100" style={{ marginTop: '18px' }}>
                                <div className="flex flex-col space-y-3 mt-4">
                                    <Link to="/my-account" className="flex no-underline items-center text-gray-600 hover:text-blue-500 transition-colors duration-200">
                                        <i className="fas fa-user text-lg mr-2"></i> My Account
                                    </Link>
                                    <Link to="/my-orders" className="flex no-underline items-center text-gray-600 hover:text-blue-500 transition-colors duration-200">
                                        <i className="fas fa-box text-lg mr-2"></i> My Orders
                                    </Link>
                                    <Link to="/logout" className="flex no-underline items-center text-gray-600 hover:text-red-500 transition-colors duration-200">
                                        <i className="fas fa-sign-out-alt text-lg mr-2 text-red"></i> Logout
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <span className="text-gray-600 hover:text-primary cursor-pointer flex items-center">
                                <p className="text-white m-0">About</p>
                                <i className="fas fa-chevron-right text-sm ml-2 text-gray-600 transform group-hover:rotate-90 transition-transform duration-300 ease-in-out"></i>
                            </span>
                            <div className="absolute z-20 left-0 top-full w-24 p-5 "></div>
                            <div className="absolute z-20 left-0 top-full w-48 p-5  bg-white shadow-lg hidden group-hover:block transition-opacity duration-300 delay-100"
                                style={{ marginTop: '18px' }}>
                                <div className="flex flex-col space-y-3 mt-4">
                                    <Link to="/my-account" className="flex no-underline items-center text-gray-600 hover:text-blue-500 transition-colors duration-200">
                                        <i className="fas fa-user text-lg mr-2"></i> My Account
                                    </Link>
                                    <Link to="/my-orders" className="flex no-underline items-center text-gray-600 hover:text-blue-500 transition-colors duration-200">
                                        <i className="fas fa-box text-lg mr-2"></i> My Orders
                                    </Link>
                                    <Link to="/logout" className="flex no-underline items-center text-gray-600 hover:text-red-500 transition-colors duration-200">
                                        <i className="fas fa-sign-out-alt text-lg mr-2 text-red"></i> Logout
                                    </Link>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="text-white text-lg h-full flex items-center justify-start p-2 space-x-2 gap-2">
                    <i className="fas fa-phone text-lg"></i>
                    <p className="text-white m-0">+84 1900 2003</p>
                </div>
            </div>
        </nav>

    )
}