import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import authApi from "../api/authApi";
import cartApi from "../api/cartApi";


interface CartContextType {
    cartItemCount: number;
    setCartItemCount: (count: number) => void;
    cartItems: CartItem[];
    setCartItems: (items: CartItem[]) => void;
    addProductToCart: (productId: string, quantity: number) => Promise<void>;
}

// Tạo Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider để bọc ứng dụng
interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const userId = (await authApi.profile()).id;
                const cart = await cartApi.getByUser(userId);

                if (cart && cart.items) {
                    setCartItems(cart.items);
                    const totalQuantity = cart.items.reduce(
                        (count, item) => count + item.quantity,
                        0
                    );
                    setCartItemCount(totalQuantity);
                } else {
                    setCartItems([]);
                    setCartItemCount(0);
                }
            } catch (error) {
                console.error("Lỗi khi lấy giỏ hàng:", error);
            }
        };

        fetchCartData();
    }, []);

    const addProductToCart = async (productId: string, quantity: number) => {
        try {
            const userId = (await authApi.profile()).id;
            await cartApi.addProductToCart(userId, productId, quantity);

            // Sau khi thêm sản phẩm, gọi lại API để cập nhật dữ liệu giỏ hàng
            const updatedCart = await cartApi.getByUser(userId);

            if (updatedCart && updatedCart.items) {
                setCartItems(updatedCart.items);
                const totalQuantity = updatedCart.items.reduce(
                    (count, item) => count + item.quantity,
                    0
                );
                setCartItemCount(totalQuantity);
            } else {
                setCartItems([]);
                setCartItemCount(0);
            }

            toast.success("Sản phẩm đã được thêm vào giỏ hàng", { autoClose: 1000 });
        } catch (error: any) {
            if (error.code === 401) {
                toast.error("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng");
                navigate("/login");
            } else {
                toast.error("Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng");
            }
        }
    };

    return (
        <CartContext.Provider
            value={{ cartItemCount, setCartItemCount, cartItems, setCartItems, addProductToCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Custom hook để sử dụng Context
export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
