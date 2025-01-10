'use client';

import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <div className="flex justify-center my-16 mx-8 h-[30rem]">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
                <div className="md:flex">
                    <div className="hidden md:block md:w-1/2">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/004/818/903/non_2x/online-shop-logo-vector.jpg"
                            alt="Login Background"
                            className=" w-full object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-8">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-semibold text-gray-700">Create an Account!</h1>
                        </div>
                        <form className="space-y-4">
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Repeat Password"
                                    />
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                                Register Account
                            </button>
                            <div className="flex justify-between items-center mt-4">
                                <button className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200">
                                    <i className="fab fa-google fa-fw mr-2"></i> Google
                                </button>
                                <button className="flex items-center justify-center w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 ml-4">
                                    <i className="fab fa-facebook-f fa-fw mr-2"></i> Facebook
                                </button>
                            </div>
                        </form>
                        <div className="text-center mt-6">
                            <Link className="text-sm text-blue-500 hover:underline" to={"/forgot-password"}>
                                Forgot Password?
                            </Link>
                        </div>
                        <div className="text-center mt-2">
                            <Link className="text-sm text-blue-500 hover:underline" to={"/auth/login"}>
                                Already have an account? Login!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}