import React from 'react';

interface CartItemComponentProps {
    item: CartItem;
    handleRemove: (id: string) => void;
}

const CartMiniItem: React.FC<CartItemComponentProps> = ({ item, handleRemove }) => {
    // Tính tổng giá
    return (
        <>

            <div className="flex items-center shadow-sm rounded p-3 bg-white w-full my-2 border border-gray-300">
                <div className="flex w-2/3">
                    <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-24 h-16 rounded object-cover"
                    />
                    <div className="flex p-2 w-full">
                        <div className="flex-1">
                            <h6 className="mb-1 text-sm font-semibold max-w-full truncate">{item.product.title}</h6>
                            <p className="text-sm">
                                <strong>{item.product.price.toLocaleString()} VND</strong>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex w-1/3 justify-end p-2">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 w-8 h-8 flex justify-center items-center">
                            x{item.quantity}
                        </span>
                        <button
                            className="btn btn-sm hover:text-red-300 text-red-700 p-2 rounded-full"
                            onClick={() => handleRemove(item.id)}
                            title="remove"
                        >
                            <i className="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default CartMiniItem;
