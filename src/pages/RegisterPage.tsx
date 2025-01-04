'use client'

import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <div className="container d-flex justify-content-center mt-2 min-vh-100">
            <div className="row justify-content-center w-100">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-2">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/004/818/903/non_2x/online-shop-logo-vector.jpg"
                                        alt="Login Background"
                                        className="img-fluid w-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                        </div>
                                        <form className="user">
                                            <div className="row">
                                                <div className="col-sm-6 mb-3">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-user"
                                                            id="exampleFirstName"
                                                            placeholder="First Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-user"
                                                            id="exampleLastName"
                                                            placeholder="Last Name"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control form-control-user"
                                                    id="exampleInputEmail"
                                                    placeholder="Email Address"
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 mb-3">
                                                    <div className="form-group">
                                                        <input
                                                            type="password"
                                                            className="form-control form-control-user"
                                                            id="exampleInputPassword"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <input
                                                            type="password"
                                                            className="form-control form-control-user"
                                                            id="exampleRepeatPassword"
                                                            placeholder="Repeat Password"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-user btn-block w-100">
                                                Register Account
                                            </button>
                                            <hr />
                                            <div className="text-center d-flex gap-2">
                                                <button className="btn btn-outline-danger btn-user btn-block">
                                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                                </button>
                                                <button className="btn btn-outline-primary btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </button>
                                            </div>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <Link className="small" to={"/forgot-password"}>
                                                Forgot Password?
                                            </Link>
                                        </div>
                                        <div className="text-center">
                                            <Link className="small" to ={"/auth/login"}>
                                                Already have an account? Login!
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
