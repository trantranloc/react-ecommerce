/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


const ProductCard: React.FC<ProductProps> = ({ product }) => {
    const { addProductToCart } = useCart();
    const handleAddToCart = () => {
        addProductToCart(product.id, 1);
    }
    return (
        <>
            {/* <div className="col mb-5">
                <div className="card h-100">
                    {product.isSale && (
                        <div
                            className="badge bg-dark text-white position-absolute"
                            style={{ top: "0.5rem", right: "0.5rem" }}
                        >
                            Sale
                        </div>
                    )}

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
                        <h5 className="fw-bolder">{product.title}</h5>

                        <p>{product.description}</p>

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
                        <Link className="btn btn-outline-primary mt-2 p-3" to={`/products/${product.id}`}>
                            <i className="fa fa-eye" aria-hidden="true"></i>
                        </Link>

                        <Link className="btn btn-outline-dark mt-auto p-3" to="#"
                            onClick={handleAddToCart}>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </Link>
                    </div>
                </div>
            </div> */}
            <div className="relative border border-primary p-4 group rounded-md">
                <img src={product.image || "https://th.bing.com/th/id/OIP.AsWQ7GPvHWOy8g-8CzEzQAHaEK?w=285&h=180&c=7&r=0&o=5&pid=1.7"} alt="Product image" className="w-full h-60 object-fill mb-4" />
                <h2 className="text-lg font-bold">{product.title}</h2>
                <p className="text-primary font-semibold">{product.price}</p>
                <div className="flex items-center mt-2">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="ml-2 text-gray-600">(4.5)</span>
                </div>

                {/* Lớp nền mờ khi hover */}
                <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute inset-x-0 left-1/4 top-1/3 w-1/2 text-white py-2 px-4 rounded transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-transform duration-300 flex justify-center space-x-4">
                    <Link to={`/products/${product.id}`} className="bg-primary text-white px-4 py-3 rounded-full shadow-lg hover:bg-black transition-colors">
                        <i className="fas fa-eye"></i>
                    </Link>
                    <button className="bg-primary text-white px-4 py-3 rounded-full shadow-lg hover:bg-black transition-colors">
                        <i className="fas fa-heart"></i> {/* Yêu thích */}
                    </button>
                </div>

                <button onClick={handleAddToCart} className="absolute inset-x-0 left-1/4 bottom-8 bg-primary w-1/2 text-white py-2 px-4 rounded transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-transform duration-300 hover:bg-green-500">
                    Add to Cart
                </button>
            </div>
        </>


    );
};

export default ProductCard;
