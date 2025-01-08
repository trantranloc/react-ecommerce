import React, { useEffect, useState } from 'react';
import productApi from '../api/productApi';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1); 
    const { addProductToCart } = useCart();
    useEffect(() => {
        const fetchProductById = async () => {
            if (!id) {
                setError("Product ID is missing.");
                return;
            }

            try {
                const data = await productApi.getById(id);
                setProduct(data);
                setLoading(false);
            } catch (err: any) {
                setError("Failed to fetch product details.");
                setLoading(false);
            }
        };

        fetchProductById();
    }, [id]);

    // Nếu đang tải dữ liệu
    if (loading) {
        return <div>Loading...</div>;
    }

    // Nếu có lỗi
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Nếu không có sản phẩm
    if (!product) {
        return <div>Product not found.</div>;
    }

    // Handle change in quantity input
    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(1, parseInt(event.target.value));
        setQuantity(value);
    };
    const handleAddToCart = () => {
        if (product) {
            addProductToCart(product.id, quantity);
        } else {
            toast.error("Sản phẩm không tồn tại.");
        }
    };

    return (
        <div className="container mx-auto px-4 my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                <div className="border border-primary">
                    <img
                        className="w-1/2 h-[40rem] rounded mb-5 md:mb-0"
                        src={product.image || "default-image.jpg"}
                        alt={product.title}
                    />
                </div>
                <div>
                    <div className="text-sm mb-1">SKU: {product.id}</div>
                    <h1 className="text-2xl font-bold">{product.title}</h1>
                    <div className="text-lg mb-5">
                        {product.oldPrice && (
                            <span className="line-through mr-2">${product.oldPrice}</span>
                        )}
                        <span>${product.price}</span>
                    </div>
                    <p className="text-base">{product.description}</p>
                    <div className="flex items-center mt-4">
                        <input
                            className="w-16 text-center border border-gray-300 rounded mr-3"
                            id="inputQuantity"
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            min="1"
                        />
                        <button
                            className="bg-gray-800 text-white py-2 px-4 rounded"
                            type="button"
                            onClick={handleAddToCart}
                        >
                            <i className="bi-cart-fill mr-1"></i>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductDetail;
