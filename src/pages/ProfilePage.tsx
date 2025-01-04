import React from "react";
import { useAuth } from "../hooks/useAuth";
export default function ProfilePage() {
    const {user } = useAuth();
    return (
        <div>
            <h1>Hồ sơ người dùng</h1>
            {user ? (
                <div>
                    <p><strong>Tên: </strong>{user.name}</p>
                    <p><strong>Email: </strong>{user.email}</p>
                    <p><strong>ID: </strong>{user.id}</p>
                </div>
            ) : (
                <p>Không có thông tin người dùng</p>
            )}
        </div>
    );
}
