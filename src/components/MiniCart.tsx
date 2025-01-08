import { Link } from "react-router-dom";
import authApi from "../api/authApi";
import cartApi from "../api/cartApi";
import { useCart } from "../context/CartContext";
import CartMiniItem from "./CartMiniItem ";

export default function MiniCart() {
    const { cartItems, cartItemCount, setCartItems } = useCart();
    const { setCartItemCount } = useCart();

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
        <div className="absolute z-20 right-0 top-full w-80 p-2 shadow-lg group-hover:block hidden bg-white">
            <b className="text-bold text-lg text-primary">My Cart</b>
            <div className=" w-full overflow-y-auto h-[13rem] p-2">
                {cartItems.map((item) => (
                    <CartMiniItem
                        key={item.id}
                        item={item}
                        handleRemove={handleRemove}
                    />
                ))}
            </div>
            <div className="flex justify-between mb-4">
                <span>Total product :</span>
                <strong>x{cartItemCount}</strong>
            </div>
            <div className="flex justify-between mb-4">
                <span>Subtotal :</span>
                <strong>{totalPrice.toLocaleString()} VND</strong>
            </div>
            <div className="flex justify-around items-center mt-4 w-full max-w-lg mx-auto gap-2">
                <Link to={"/carts"} className="bg-blue-500 border-2 border-blue-500 text-center rounded-sm px-6 py-2 w-full text-white no-underline hover:bg-blue-600 transition-colors duration-200">
                    VIEW CART
                </Link>
                <Link to={"/checkout"} className="bg-transparent border-2 border-blue-500 text-center rounded-sm px-6 py-2 w-full text-blue-500 no-underline hover:bg-blue-500 hover:text-white transition-colors duration-200">
                    CHECKOUT
                </Link>
            </div>
        </div>
    )
}