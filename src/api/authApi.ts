/* eslint-disable no-throw-literal */
import apiInstance from "./apiInstance";

interface LoginResponse {
    code: number;
    message: string;
    result: {
        authenticated: boolean;
        token: string;
    };
}

// Sửa đổi authApi
const authApi = {
    login: async (data: { email: string; password: string }): Promise<LoginResponse> => {
        const response = await apiInstance.post<LoginResponse>("/auth/login", data);
        return response.data;
    },
    logout: async (): Promise<void> => {
        await apiInstance.post("/auth/logout");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    },
    profile: async (): Promise<User> => {
        const token = localStorage.getItem("token");

        if (!token) {
            throw { code: 401, message: "Token không tồn tại. Yêu cầu đăng nhập." };
        }

        try {
            const response = await apiInstance.get<User>("/users/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            return response.data;
        } catch (error) {
            // console.error("Lỗi khi lấy thông tin người dùng", error);
            throw { code: 401, message: "Token không tồn tại. Yêu cầu đăng nhập." };
        }
    }
};

export default authApi;
