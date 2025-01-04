import apiInstance from "./apiInstance"

const cartApi = {
    getByUser: async (userId: string): Promise<Cart> => {
        const response = await apiInstance.get<{ result: Cart }>(`/carts/user/${userId}`);
        return response.data.result;
    },
    addProductToCart: async (userId: string, productId: string, quantity: number = 1): Promise<void> => {
        await apiInstance.post<{ result: string }>(`/carts/add?userId=${userId}&productId=${productId}&quantity=${quantity}`, {
            userId,
            productId,
            quantity,
        });
        // return response.data.result;
    },
    removeProductToCart: async (userId: string, cartItemId: string): Promise<string> => {
        try {
            console.log("Calling API to remove product:", { userId, cartItemId });
            const response = await apiInstance.delete<{ result: string }>(
                `/carts/remove?userId=${userId}&cartItemId=${cartItemId}`
            );
            // console.log("API response:", response.data);
            return response.data.result;
        } catch (error: any) {
            console.error("API error:", error.response?.data || error.message);
            throw new Error("Failed to remove product.");
        }
    },
    increment: async (userId: string, productId: string): Promise<void> => {
        if (!userId || !productId) {
            console.error("Invalid userId or productId");
            return;
        }
        try {
            await apiInstance.put<void>(
                `/carts/increment?userId=${encodeURIComponent(userId)}&productId=${encodeURIComponent(productId)}`
            );
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || "Something went wrong!";
            console.error("API error:", errorMessage, { userId, productId });
        }
    },
    decrement: async (userId: string, productId: string): Promise<void> => {
        if (!userId || !productId) {
            console.error("Invalid userId or productId");
            return;
        }
        try {
            await apiInstance.put<void>(
                `/carts/decrement?userId=${encodeURIComponent(userId)}&productId=${encodeURIComponent(productId)}`
            );
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || "Something went wrong!";
            console.error("API error:", errorMessage, { userId, productId });
        }
    },





}
export default cartApi;