export default function ForgotPasswordPage() {
    return (
        <div className="flex justify-center ">
            <div className="p-8 m-24 bg-white rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Forgot Password
                </h2>
                <p className="text-gray-600 text-center mb-6">
                    Enter your email address to reset your password.
                </p>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <button
                        className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                        type="submit"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}
