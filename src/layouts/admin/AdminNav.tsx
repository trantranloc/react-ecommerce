import React, { useState } from 'react';

export default function AdminNav() {
    const [openMenu, setOpenMenu] = useState(null);

    const handleMenuClick = (menu:any) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <div className="container w-1/4 bg-light h-screen p-4">
            {/* Profile Manage */}
            <div className="flex flex-col items-center mb-8">
                <div className="w-40 h-40">
                    <img src="" alt="Profile" className="rounded-full border border-black w-full h-full object-cover" />
                </div>
                <h1 className="text-xl font-bold mt-4">
                    Loc Tran Tran
                </h1>
                <div className="relative group mt-4">
                    <i className="fas fa-user-cog text-xl cursor-pointer"></i>
                    <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border border-gray-200 rounded shadow-lg">
                        <ul className="text-black">
                            <li className="p-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                            <li className="p-2 hover:bg-gray-100 cursor-pointer">Setting</li>
                            <li className="p-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* E-commerce Management */}
            <nav className="flex flex-col space-y-4">
                {/* Dashboard */}
                <div>
                    <a href="/dashboard" className="text-lg font-medium flex items-center hover:text-blue-500">
                        <i className="fas fa-tachometer-alt mr-2"></i> Dashboard
                    </a>
                </div>

                {/* Manage Products */}
                <div>
                    <button
                        onClick={() => handleMenuClick('products')}
                        className="text-lg font-medium flex items-center justify-between w-full hover:text-blue-500"
                    >
                        <span><i className="fas fa-box mr-2"></i> Manage Products</span>
                        <i className={`fas ${openMenu === 'products' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </button>
                    {openMenu === 'products' && (
                        <div className="pl-6 mt-2 space-y-2">
                            <a href="/list-products" className="block text-sm hover:text-blue-500">List Products</a>
                            <a href="/add-product" className="block text-sm hover:text-blue-500">Add Product</a>
                            <a href="/product-reviews" className="block text-sm hover:text-blue-500">Product Reviews</a>
                        </div>
                    )}
                </div>

                {/* Categories */}
                <div>
                    <button
                        onClick={() => handleMenuClick('categories')}
                        className="text-lg font-medium flex items-center justify-between w-full hover:text-blue-500"
                    >
                        <span><i className="fas fa-tags mr-2"></i> Categories</span>
                        <i className={`fas ${openMenu === 'categories' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </button>
                    {openMenu === 'categories' && (
                        <div className="pl-6 mt-2 space-y-2">
                            <a href="/list-categories" className="block text-sm hover:text-blue-500">List Categories</a>
                            <a href="/add-category" className="block text-sm hover:text-blue-500">Add Category</a>
                        </div>
                    )}
                </div>

                {/* Orders */}
                <div>
                    <button
                        onClick={() => handleMenuClick('orders')}
                        className="text-lg font-medium flex items-center justify-between w-full hover:text-blue-500"
                    >
                        <span><i className="fas fa-shopping-cart mr-2"></i> Orders</span>
                        <i className={`fas ${openMenu === 'orders' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </button>
                    {openMenu === 'orders' && (
                        <div className="pl-6 mt-2 space-y-2">
                            <a href="/list-orders" className="block text-sm hover:text-blue-500">List Orders</a>
                            <a href="/order-status" className="block text-sm hover:text-blue-500">Order Status</a>
                        </div>
                    )}
                </div>

                {/* Customers */}
                <div>
                    <button
                        onClick={() => handleMenuClick('customers')}
                        className="text-lg font-medium flex items-center justify-between w-full hover:text-blue-500"
                    >
                        <span><i className="fas fa-users mr-2"></i> Customers</span>
                        <i className={`fas ${openMenu === 'customers' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </button>
                    {openMenu === 'customers' && (
                        <div className="pl-6 mt-2 space-y-2">
                            <a href="/list-customers" className="block text-sm hover:text-blue-500">List Customers</a>
                            <a href="/customer-feedback" className="block text-sm hover:text-blue-500">Customer Feedback</a>
                        </div>
                    )}
                </div>

                {/* Reports */}
                <div>
                    <button
                        onClick={() => handleMenuClick('reports')}
                        className="text-lg font-medium flex items-center justify-between w-full hover:text-blue-500"
                    >
                        <span><i className="fas fa-chart-line mr-2"></i> Reports</span>
                        <i className={`fas ${openMenu === 'reports' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </button>
                    {openMenu === 'reports' && (
                        <div className="pl-6 mt-2 space-y-2">
                            <a href="/sales-reports" className="block text-sm hover:text-blue-500">Sales Reports</a>
                            <a href="/customer-reports" className="block text-sm hover:text-blue-500">Customer Reports</a>
                        </div>
                    )}
                </div>

                {/* Settings */}
                <div>
                    <button
                        onClick={() => handleMenuClick('settings')}
                        className="text-lg font-medium flex items-center justify-between w-full hover:text-blue-500"
                    >
                        <span><i className="fas fa-cogs mr-2"></i> Settings</span>
                        <i className={`fas ${openMenu === 'settings' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </button>
                    {openMenu === 'settings' && (
                        <div className="pl-6 mt-2 space-y-2">
                            <a href="/general-settings" className="block text-sm hover:text-blue-500">General Settings</a>
                            <a href="/account-settings" className="block text-sm hover:text-blue-500">Account Settings</a>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}
