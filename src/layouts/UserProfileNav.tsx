import { Outlet, NavLink } from "react-router-dom";

export default function UserProfileNav() {
    return (
        <div className="container mx-auto flex my-8">
            <div className="w-1/4">
                {/* Image - Name */}
                <div className="flex items-center shadow p-4 m-2">
                    <img src="https://th.bing.com/th/id/OIP.rcmXeqCUOiCg54dfU4v9tgHaHa?rs=1&pid=ImgDetMain" alt="Profile Picture"
                        className="w-16 h-16 rounded-full" />
                    <h1 className="text-2xl font-bold px-4">Tran Tran</h1>
                </div>
                <div className="shadow-lg p-4 m-2">
                    <NavLink
                        to="/my-account"
                        className={({ isActive }) => isActive ? "flex items-center py-2 text-blue-500" : "flex items-center py-2"}
                    >
                        <i className="fas fa-user mr-2"></i>
                        My Account
                    </NavLink>
                    <NavLink
                        to="/profile-info"
                        className={({ isActive }) => isActive ? "flex items-center py-2 text-blue-500" : "flex items-center py-2"}
                    >
                        <i className="fas fa-address-card mr-2"></i>
                        Profile Information
                    </NavLink>
                    <NavLink
                        to="/change-password"
                        className={({ isActive }) => isActive ? "flex items-center py-2 text-blue-500" : "flex items-center py-2"}
                    >
                        <i className="fas fa-lock mr-2"></i>
                        Change Password
                    </NavLink>
                    <hr className="my-2" />
                    <NavLink
                        to="/order-history"
                        className={({ isActive }) => isActive ? "flex items-center py-2 text-blue-500" : "flex items-center py-2"}
                    >
                        <i className="fas fa-history mr-2"></i>
                        My Order History
                    </NavLink>
                    <NavLink
                        to="/returns"
                        className={({ isActive }) => isActive ? "flex items-center py-2 text-blue-500" : "flex items-center py-2"}
                    >
                        <i className="fas fa-undo mr-2"></i>
                        My Returns
                    </NavLink>
                    <NavLink
                        to="/cancellations"
                        className={({ isActive }) => isActive ? "flex items-center py-2 text-blue-500" : "flex items-center py-2"}
                    >
                        <i className="fas fa-times-circle mr-2"></i>
                        My Cancellations
                    </NavLink>
                    <NavLink
                        to="/reviews"
                        className={({ isActive }) => isActive ? "flex items-center py-2 text-blue-500" : "flex items-center py-2"}
                    >
                        <i className="fas fa-star mr-2"></i>
                        My Reviews
                    </NavLink>
                    <hr className="my-2" />
                    <NavLink
                        to="/payment-methods"
                        className={({ isActive }) => isActive ? "flex items-center py-2 text-blue-500" : "flex items-center py-2"}
                    >
                        <i className="fas fa-credit-card mr-2"></i>
                        Payments Methods
                    </NavLink>
                    <NavLink
                        to="/vouchers"
                        className={({ isActive }) => isActive ? "flex items-center py-2 text-blue-500" : "flex items-center py-2"}
                    >
                        <i className="fas fa-gift mr-2"></i>
                        Voucher
                    </NavLink>
                    <hr className="my-2" />
                    <NavLink
                        to="/wishlist"
                        className={({ isActive }) => isActive ? "flex items-center py-2 text-blue-500" : "flex items-center py-2"}
                    >
                        <i className="fas fa-heart mr-2"></i>
                        My Wishlist
                    </NavLink>
                    <hr className="my-2" />
                    <NavLink
                        to="/logout"
                        className={({ isActive }) => isActive ? "flex items-center py-2 text-blue-500" : "flex items-center py-2"}
                    >
                        <i className="fas fa-sign-out-alt mr-2"></i>
                        Log Out
                    </NavLink>
                </div>
            </div>
            <main className="w-3/4">
                <Outlet />
            </main>
        </div>
    )
}
