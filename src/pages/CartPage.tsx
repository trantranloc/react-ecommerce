import React from "react";
import CartItem from "../components/CartItem";
import cartApi from "../api/cartApi";
import authApi from "../api/authApi";
import { useCart } from "../context/CartContext";

function CartPage() {
    const { cartItems, setCartItems } = useCart();
    const { setCartItemCount } = useCart();

    // Hàm tăng số lượng
    const handleIncrease = async (productId: string) => {
        try {
            const userData = await authApi.profile();
            const userId = userData.id;
            await cartApi.increment(userId, productId);
            const updatedCart = await cartApi.getByUser(userId);
            setCartItems(updatedCart.items);
            const totalItems = updatedCart.items.reduce((total, item) => total + item.quantity, 0);
            setCartItemCount(totalItems);
        } catch (error: any) {
            console.error("Error updating cart item:", error);
        }
    };
    // Hàm giảm số lượng
    const handleDecrease = async (productId: string) => {
        try {
            const userData = await authApi.profile();
            const userId = userData.id;
            await cartApi.decrement(userId, productId);
            const updatedCart = await cartApi.getByUser(userId);
            setCartItems(updatedCart.items);
            const totalItems = updatedCart.items.reduce((total, item) => total + item.quantity, 0);
            setCartItemCount(totalItems);
        } catch (error: any) {
            console.error("Error updating cart item:", error);
        }
    };


    const handleRemove = async (cartItemId: string) => {
        try {
            // Lấy thông tin người dùng
            const userData = await authApi.profile();
            const userId = userData.id;

            // Gọi API để xóa sản phẩm khỏi giỏ hàng
            await cartApi.removeProductToCart(userId, cartItemId);
            const cartData = await cartApi.getByUser(userId);
            const totalItems = cartData.items.reduce((total, item) => total + item.quantity, 0);
            setCartItemCount(totalItems);
            setCartItems(cartData.items);
        } catch (error) {
            console.error("Đã xảy ra lỗi khi xóa sản phẩm:", error);
            // Hiển thị thông báo lỗi cho người dùng nếu cần
        }
    };


    // Tính tổng giá
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.product?.price * item.quantity,
        0
    );

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Giỏ hàng của bạn</h2>
            {cartItems.length === 0 ? (
                <div className="text-center">
                    <p>Giỏ hàng của bạn đang trống.</p>
                    <button className="btn btn-primary">Tiếp tục mua sắm</button>
                </div>
            ) : (
                <div className="d-flex flex-lg-row flex-column align-items-start">
                    {/* Cart Items */}
                    <div className="w-100 me-lg-4">
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                handleIncrease={handleIncrease}
                                handleDecrease={handleDecrease}
                                handleRemove={handleRemove}
                            />
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="w-100 mt-4 mt-lg-0">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title text-center mb-4">Tóm tắt giỏ hàng</h5>
                                <p className="card-text d-flex justify-content-between">
                                    <span>Tổng số sản phẩm:</span>
                                    <strong>{cartItems.reduce((total, item) => total + item.quantity, 0)}</strong>
                                </p>
                                <p className="card-text d-flex justify-content-between">
                                    <span>Tổng giá trị:</span>
                                    <strong>{totalPrice.toLocaleString()} VND</strong>
                                </p>
                                <button className="btn btn-primary w-100">
                                    Thanh toán
                                </button>
                                <button className="btn btn-outline-secondary w-100 mt-2">
                                    Tiếp tục mua sắm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}

export default CartPage;
