import React from "react";
import CartItem from "../../components/CartItem";
import cartApi from "../../api/cartApi";
import authApi from "../../api/authApi";
import { useCart } from "../../context/CartContext";

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
        <>
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-gray-500">My Cart</h2>
                <div className="flex  justify-center py-4">
                    <div className="flex flex-col w-full">
                        <div className="flex bg-primary w-full m-0">
                            <div className="flex text-white justify-around items-center w-full">
                                <span className="flex-1 text-center">Product</span>
                                <span className="flex-1 text-center">Quantity</span>
                                <span className="flex-1 text-center">Total Price</span>
                            </div>
                        </div>
                        {/* Cart Item */}
                        <div className=" w-full overflow-y-auto h-[45rem] p-2">
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

                    </div>
                    {/* Summary */}
                    <div className="w-1/3 mt-4">
                        <div className="bg-white shadow-sm rounded-lg p-4">
                            <div className="text-center mb-4">
                                <h5 className="text-xl font-semibold">ORDER SUMMARY</h5>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Total Product :</span>
                                <strong>{cartItems.reduce((total, item) => total + item.quantity, 0)}</strong>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span>Subtotal :</span>
                                <strong>{totalPrice.toLocaleString()} VND</strong>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span>Delivery :</span>
                                <strong> Free</strong>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span>Tax :</span>
                                <strong> Free</strong>
                            </div>
                            <hr />
                            <div className="flex justify-between my-4">
                                <span>Total :</span>
                                <strong> {totalPrice.toLocaleString()}</strong>
                            </div>
                            <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                                Proccees to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default CartPage;
