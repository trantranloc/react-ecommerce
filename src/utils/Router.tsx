import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';
import AdminLayout from '../layouts/AdminLayout';
import HomePage from '../pages/HomePage';
import Dashboard from '../pages/admin/Dashboard';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProductDetail from '../components/ProductDetail';
import ProfilePage from '../pages/ProfilePage';
import CartPage from '../pages/CartPage';
import ProductManagement from '../pages/admin/ProductPage';
import ProductPage from '../pages/ProductPage';
import UserProfileNav from '../layouts/UserProfileNav';
import MyAccount from '../pages/MyAccount';
import CheckoutPage from '../pages/CheckoutPage';
import ManageAddressPage from '../pages/ManageAddressPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import ChangePassword from '../pages/ChangePassword';

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
