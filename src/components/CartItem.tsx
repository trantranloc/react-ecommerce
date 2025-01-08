import React from 'react';

interface CartItemComponentProps {
    item: CartItem;
    handleIncrease: (id: string) => void;
    handleDecrease: (id: string) => void;
    handleRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemComponentProps> = ({ item, handleIncrease, handleDecrease, handleRemove }) => {
    return (
        <>
            <div className="flex items-center shadow-sm rounded p-3 bg-white w-full my-2 border border-gray-300">
                <div className="flex w-2/4">
                    <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-24 h-24 rounded object-cover"
                    />
                    <div className="flex p-2 w-full">
                        <div className="flex-1">
                            <h5 className="mb-1 text-lg font-semibold max-w-full truncate">{item.product.title}</h5>
                            <p className="mb-2">
                                <strong>{item.product.price.toLocaleString()} VND</strong>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex  rounded-lg  w-1/4">
                    <div className="flex-1 flex justify-center items-center ">
                        <button
                            className="border border-gray-300  hover:bg-gray-100 text-gray-700 w-10 h-10 flex justify-center items-center rounded-sm"
                            onClick={() => handleDecrease(item.product.id)}
                        >
                            -
                        </button>
                        <span className="border border-gray-300 text-gray-700 w-10 h-10 flex justify-center items-center">
                            {item.quantity}
                        </span>
                        <button
                            className="border border-gray-300 hover:bg-gray-100 text-gray-700 w-10 h-10 flex justify-center items-center rounded-sm"
                            onClick={() => handleIncrease(item.product.id)}
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="flex  w-1/3 justify-end p-2">
                    <div className="flex items-center  gap-2">
                        <p>
                            <strong>{(item.product.price * item.quantity).toLocaleString()} VND</strong>
                        </p>
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

export default CartItem;
