import React from 'react';

interface CartItemComponentProps {
    item: CartItem;
    handleIncrease: (id: string) => void;
    handleDecrease: (id: string) => void;
    handleRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemComponentProps> = ({ item, handleIncrease, handleDecrease, handleRemove }) => {
    return (
        <div className="d-flex align-items-center mb-4 shadow-sm rounded p-3 bg-white">
            <img
                src={item.product.image}
                alt={item.product.title}
                className="img-fluid rounded"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <div className="ms-3 w-100 d-flex justify-content-between align-items-center">
                {/* Thông tin sản phẩm */}
                <div className="me-3" style={{ flex: 1 }}>
                    <h5 className="mb-1">{item.product.title}</h5>
                    <p className="mb-2">
                        Giá: <strong>{item.product.price.toLocaleString()} VND</strong>
                    </p>
                </div>

                {/* Điều chỉnh số lượng và nút xóa */}
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center me-3">
                        <button
                            className="btn btn-sm btn-outline-danger me-2"
                            onClick={() => handleDecrease(item.product.id)}
                        >
                            -
                        </button>
                        <span className="badge bg-secondary">{item.quantity}</span>
                        <button
                            className="btn btn-sm btn-outline-success ms-2"
                            onClick={() => handleIncrease(item.product.id)}
                        >
                            +
                        </button>
                    </div>
                    <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleRemove(item.id)}
                    >
                        Xóa
                    </button>
                </div>
            </div>

        </div>
    );
}

export default CartItem;
