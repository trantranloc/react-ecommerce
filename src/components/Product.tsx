import React from "react";
import { Link } from "react-router-dom";
interface ProductProps {
    product: any; 
}

const Product: React.FC<ProductProps> = ({ product }) => (
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
            <img className="card-img-top" src={product.image} alt={product.name} />
            <div className="card-body p-4 text-center">
                <h5 className="fw-bolder">{product.name}</h5>
                {product.rating && (
                    <div className="d-flex justify-content-center small text-warning mb-2">
                        {"★".repeat(product.rating)}
                        {"☆".repeat(5 - product.rating)}
                    </div>
                )}
                <div>
                    {product.oldPrice && (
                        <span className="text-muted text-decoration-line-through">
                            {product.oldPrice}
                        </span>
                    )}{" "}
                    {product.price}
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                <Link className="btn btn-outline-dark mt-auto" to={"#"}>
                    {product.isSale ? "Add to cart" : "View options"}
                </Link>
            </div>
        </div>
    </div>
);

export default Product;
