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
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                {/* Hình ảnh sản phẩm */}
                <div className="col-md-6">
                    <img
                        className="card-img-top mb-5 mb-md-0"
                        src={product.image || "default-image.jpg"}
                        alt={product.title}
                    />
                </div>

                <div className="col-md-6">
                    {/* SKU (Mã sản phẩm) */}
                    <div className="small mb-1">SKU: {product.id}</div>

                    {/* Tên sản phẩm */}
                    <h1 className="display-5 fw-bolder">{product.title}</h1>

                    {/* Hiển thị giá cũ và giá hiện tại */}
                    <div className="fs-5 mb-5">
                        {product.oldPrice && (
                            <span className="text-decoration-line-through">${product.oldPrice}</span>
                        )}
                        <span>${product.price}</span>
                    </div>

                    {/* Mô tả sản phẩm */}
                    <p className="lead">{product.description}</p>

                    {/* Thêm vào giỏ hàng */}
                    <div className="d-flex">
                        <input
                            className="form-control text-center me-3"
                            id="inputQuantity"
                            type="number"
                            value={quantity}  // Bind quantity state to input value
                            onChange={handleQuantityChange}  // Update state on change
                            style={{ maxWidth: '3rem' }}
                            min="1"
                        />
                        <button className="btn btn-outline-dark flex-shrink-0" type="button"
                            onClick={handleAddToCart}>
                            <i className="bi-cart-fill me-1"></i>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
