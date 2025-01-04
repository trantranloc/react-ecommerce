import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


const ProductCard: React.FC<ProductProps> = ({ product }) => {
    const { addProductToCart } = useCart();
    const handleAddToCart = () => {
        addProductToCart(product.id, 1);
    }
    return (
        <div className="col mb-5">
            <div className="card h-100">
                {product.isSale && (
                    <div
                        className="badge bg-dark text-white position-absolute"
                        style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                        Sale
                    </div>
                )}

                {/* Hiển thị hình ảnh sản phẩm với kích thước cố định */}
                <img
                    className="card-img-top"
                    src={product.image || "default-image.jpg"}
                    alt={product.title}
                    style={{
                        objectFit: "cover",
                        height: "200px",
                        width: "100%",
                    }}
                />

                <div className="card-body p-4 text-center">
                    {/* Tên sản phẩm */}
                    <h5 className="fw-bolder">{product.title}</h5>

                    {/* Mô tả sản phẩm */}
                    <p>{product.description}</p>

                    {/* Hiển thị giá cũ nếu có và giá hiện tại */}
                    <div>
                        {product.oldPrice && (
                            <span className="text-muted text-decoration-line-through">
                                ${product.oldPrice}
                            </span>
                        )}{" "}
                        ${product.price}
                    </div>
                    {product.rating && (
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            {"★".repeat(product.rating)}
                            {"☆".repeat(5 - product.rating)}
                        </div>
                    )}
                </div>

                <div className="d-flex gap-3 card-footer p-4 pt-0 border-top-0 bg-transparent justify-content-center">
                    {/* Nút xem chi tiết */}
                    <Link className="btn btn-outline-primary mt-2 p-3" to={`/products/${product.id}`}>
                        <i className="fa fa-eye" aria-hidden="true"></i>
                    </Link>

                    {/* Nút thêm vào giỏ hàng */}
                    <Link className="btn btn-outline-dark mt-auto p-3" to="#"
                        onClick={handleAddToCart}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
