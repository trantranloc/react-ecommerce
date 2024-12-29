import apiInstance from './Index';

// Lấy danh sách sản phẩm
export const fetchProducts = async () => {
    const response = await apiInstance.get('/products');
    return response.data;
};

// Lấy chi tiết sản phẩm theo ID
export const fetchProductById = async (id: string) => {
    const response = await apiInstance.get(`/products/${id}`);
    return response.data;
};

// Tạo mới sản phẩm
export const createProduct = async (data: { name: string; price: number }) => {
    const response = await apiInstance.post('/products', data);
    return response.data;
};

// Xóa sản phẩm
export const deleteProduct = async (id: string) => {
    const response = await apiInstance.delete(`/products/${id}`);
    return response.data;
};
