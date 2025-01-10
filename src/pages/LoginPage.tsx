'use client';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import authApi from "../api/authApi";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setIsLoggedIn } = useAuth();

    const isValidInput = () => email && password;

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!isValidInput()) {
            setError("Tài khoản và mật khẩu không thể để trống");
            return;
        }
        setLoading(true);
        setError("");
        try {
            const response = await authApi.login({ email, password });
            if (response.code === 200 && response.result.authenticated) {
                localStorage.setItem("token", response.result.token);
                localStorage.setItem("authenticated", "true");
                setIsLoggedIn(true);
                navigate("/");
            } else {
                setError("Đăng nhập không thành công. Vui lòng kiểm tra lại.");
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center my-16 mx-8 h-[30rem]">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
                <div className="md:flex">
                    <div className="hidden md:block md:w-1/2">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/004/818/903/non_2x/online-shop-logo-vector.jpg"
                            alt="Login Background"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-8">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-semibold text-gray-700">Welcome Back!</h1>
                        </div>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter Email Address..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {error && <div className="text-red-500 text-sm">{error}</div>}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                            >
                                {loading ? "Loading..." : "Login"}
                            </button>
                        </form>
                        <div className="text-center mt-6">
                            <a className="text-sm text-blue-500 hover:underline" href="/forgot-password">
                                Forgot Password?
                            </a>
                        </div>
                        <div className="text-center mt-2">
                            <a className="text-sm text-blue-500 hover:underline" href="/auth/register">
                                Don't have an account? Register!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
