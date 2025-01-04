import { useState } from "react";
import authApi from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const isValidInput = () => email && password;
    const { setIsLoggedIn } = useAuth();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isValidInput()) {
            setError("Tài khoản và mật khẩu không thể để trống");
            return;
        }
        setLoading(true);
        setError("");
        try {
            const response = await authApi.login({ email, password });
            console.log(response);
            if (response.code === 200 && response.result.authenticated) {
                // Lưu token và trạng thái xác thực
                localStorage.setItem("token", response.result.token);
                localStorage.setItem("authenticated", "true");
                console.log(response.result.token)
                setIsLoggedIn(true);
                // Chuyển hướng sau khi đăng nhập thành công
                navigate("/");
            } else {
                setError("Đăng nhập không thành công. Vui lòng kiểm tra lại.");
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);

        }
    }
    return (
        <div className="container d-flex justify-content-center mt-2 min-vh-100">
            <div className="row justify-content-center w-100">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form className="user" onSubmit={handleSubmit}>
                                            <div className="form-group mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control form-control-user"
                                                    id="exampleInputEmail"
                                                    placeholder="Enter Email Address..."
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}

                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input
                                                    type="password"
                                                    className="form-control form-control-user"
                                                    id="exampleInputPassword"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}

                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <div className="custom-control custom-checkbox small">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheck"
                                                    >
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                            {error && <div className="alert alert-danger">{error}</div>}
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-user btn-block w-100"
                                            >
                                                {loading ? "Loading..." : "Login"}
                                            </button>
                                            <hr />
                                            <div className="text-center d-flex gap-2">
                                                <button className="btn btn-outline-danger btn-user btn-block mx-2">
                                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                                </button>
                                                <button className="btn btn-outline-primary btn-user btn-block mx-2">
                                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </button>
                                            </div>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">
                                                Forgot Password?
                                            </a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small" href="/auth/register">
                                                Create an Account!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-none d-lg-block bg-login-image">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/004/818/903/non_2x/online-shop-logo-vector.jpg"
                                        alt="Login Background"
                                        className="img-fluid w-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
