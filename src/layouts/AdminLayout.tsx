import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function AdminLayout() {
    return (
        <div className="admin-layout">
            <header>
                <nav>
                    <ul>
                        <li><Link to="/admin">Dashboard</Link></li> {/* Trang chủ admin */}
                        <li><Link to="/admin/users">Users</Link></li>
                        <li><Link to="/admin/product">Settings</Link></li> {/* Đổi thành đúng tên trang */}
                    </ul>
                </nav>
            </header>
            <main>
                {/* Render các route con */}
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
