export default function ChangePassword() {
    return (
        <div className="flex justify-center">
            <div className="p-8 m-24 bg-white rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Change Password
                </h2>
                <p className="text-gray-600 text-center mb-6">
                    Enter your current password and the new password to update.
                </p>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="current-password">
                            Current Password:
                        </label>
                        <input
                            className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            id="current-password"
                            placeholder="Enter current password"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="new-password">
                            New Password:
                        </label>
                        <input
                            className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            id="new-password"
                            placeholder="Enter new password"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="confirm-password">
                            Confirm New Password:
                        </label>
                        <input
                            className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm new password"
                            required
                        />
                    </div>
                    <button
                        className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                        type="submit"
                    >
                        Update Password
                    </button>
                </form>
            </div>
        </div>
    );
}
