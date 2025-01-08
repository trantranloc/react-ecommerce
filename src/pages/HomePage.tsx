import React, { useEffect, useState } from "react";
import Carousel from "../layouts/Carousel";
import ProductCard from "../components/ProductCard";
import productApi from "../api/productApi";

export default function HomePage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await productApi.getAll();
                setProducts(data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return <p>Loading products...</p>;
    }

    return (
        <div className="">
            <Carousel />
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {products.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
            </div>

        </div>
    );
};