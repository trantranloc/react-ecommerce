import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../layouts/admin/AdminLayout';
import HomePage from '../pages/user/HomePage';
import Dashboard from '../pages/admin/Dashboard';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProductDetail from '../components/ProductDetail';
import ProfilePage from '../pages/user/ProfilePage';
import CartPage from '../pages/user/CartPage';
import ProductManagement from '../pages/admin/ProductPage';
import ProductPage from '../pages/user/ProductPage';
import MyAccount from '../pages/user/MyAccount';
import CheckoutPage from '../pages/user/CheckoutPage';
import ManageAddressPage from '../pages/user/ManageAddressPage';
import ForgotPasswordPage from '../pages/user/ForgotPasswordPage';
import ChangePassword from '../pages/user/ChangePassword';
import UserLayout from '../layouts/user/UserLayout';
import UserProfileNav from '../layouts/user/UserProfileNav';

function Router() {
    return (
        <Routes>
            {/* Các route cho người dùng */}
            <Route element={<UserLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/carts" element={<CartPage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/products/search" element={<ProductPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/change-password" element={<ChangePassword />} />

                <Route element={<UserProfileNav />} >
                    <Route path="/my-account" element={<MyAccount />} />
                    <Route path="/profile-info" element={<ProfilePage />} />
                    <Route path="/manage-address" element={<ManageAddressPage />} />

                </Route>
            </Route>

            {/* Các route cho admin */}
            <Route element={<AdminLayout />}>
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/admin/product" element={<ProductManagement />} />
            </Route>
        </Routes>
    );
}

export default Router;
