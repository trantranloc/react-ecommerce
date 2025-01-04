import React, { createContext, useState, useEffect, ReactNode } from 'react';
import authApi from '../api/authApi';

// Định nghĩa kiểu cho context
interface AuthContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: (status: boolean) => void;
    user: User | null;
    loading: boolean;
    error: string;
}

// Định nghĩa kiểu cho AuthProvider props
interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    // Kiểm tra token và trạng thái xác thực
    useEffect(() => {
        const token = localStorage.getItem("token");
        const authenticated = localStorage.getItem("authenticated");

        if (token && authenticated === "true") {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    // Lấy dữ liệu người dùng từ API nếu đã đăng nhập
    useEffect(() => {
        if (!isLoggedIn) return; // Nếu chưa đăng nhập thì không gọi API

        const fetchUserData = async () => {
            try {
                const userData = await authApi.profile();
                setUser(userData);
                setLoading(false);
            } catch (err: any) {
                setError("Lỗi khi lấy thông tin người dùng");
                setLoading(false);
            }
        };
        fetchUserData();
    }, [isLoggedIn]); // Chỉ gọi khi trạng thái đăng nhập thay đổi

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, loading, error }}>
            {children}
        </AuthContext.Provider>
    );
};
