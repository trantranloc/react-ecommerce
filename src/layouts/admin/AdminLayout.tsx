import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNav from './AdminNav';

function AdminLayout() {
    return (
        <div className="admin-layout">
            <header>
            </header>
            <nav>
                <AdminNav />
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
