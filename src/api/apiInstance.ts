import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api/v1";

const apiInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// apiInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             if (!config.headers) {
//                 config.headers = {};
//             }
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

export default apiInstance;
