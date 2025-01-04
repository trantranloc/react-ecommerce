import apiInstance from "./apiInstance";

const productApi = {
    // Lấy tất cả sản phẩm
    getAll: async (): Promise<Product[]> => {
        const response = await apiInstance.get<{ result: Product[] }>('/products');
        return response.data.result;
    },

    // Lấy chi tiết một sản phẩm theo ID
    getById: async (id: string): Promise<Product> => {
        const response = await apiInstance.get<{ result: Product }>(`/products/${id}`);
        return response.data.result;
    },

    // Thêm mới một sản phẩm
    create: async (product: Omit<Product, 'id'>): Promise<Product> => {
        const response = await apiInstance.post<{ result: Product }>('/products', product);
        return response.data.result;
    },

    // Cập nhật một sản phẩm theo ID
    update: async (id: number, product: Partial<Product>): Promise<Product> => {
        const response = await apiInstance.put<{ result: Product }>(`/products/${id}`, product);
        return response.data.result;
    },

    // Xóa một sản phẩm theo ID
    delete: async (id: number): Promise<void> => {
        await apiInstance.delete(`/products/${id}`);
    },
};

export default productApi;
