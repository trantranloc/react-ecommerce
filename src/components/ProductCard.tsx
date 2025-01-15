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
            <div className="relative border border-primary p-4 group rounded-md">
                <img src={product.image} alt="Product image" className="w-full h-60 object-fill mb-4" />
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

                <button title="add to cart" onClick={handleAddToCart} className="absolute inset-x-0 left-1/4 bottom-8 bg-primary w-1/2 text-white py-2 px-4 rounded transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-transform duration-300 hover:bg-green-500">
                    <i className="fa-solid fa-cart-plus text-white"></i>
                </button>
            </div>
        </>


    );
};

export default ProductCard;
