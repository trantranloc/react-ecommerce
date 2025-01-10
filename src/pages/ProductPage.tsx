import React, { useEffect, useState } from 'react';

import ProductCard from '../components/ProductCard';
import productApi from '../api/productApi';

const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await productApi.getAll();
                setProducts(data);
            } catch (err) {
                console.error('Failed to fetch products:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto flex flex-wrap">
            {/* Filter Section */}
            <div className="flex flex-col justify-start shadow p-4 m-2 my-4 w-full md:w-1/4 mb-4">
                <p className="text-2xl font-bold mb-2">CATEGORIES</p>
                <label>
                    <input type="checkbox" className="mr-2" /> Clothes
                </label>
                <label>
                    <input type="checkbox" className="mr-2" /> Electronics
                </label>
                <label>
                    <input type="checkbox" className="mr-2" /> Accessories
                </label>
                <hr className="my-4" />
                <p className="text-2xl font-bold mb-2">BRANDS</p>
                <label>
                    <input type="checkbox" className="mr-2" /> Nike
                </label>
                <label>
                    <input type="checkbox" className="mr-2" /> Adidas
                </label>
                <label>
                    <input type="checkbox" className="mr-2" /> Apple
                </label>
                <hr className="my-4" />
                <p className="text-2xl font-bold mb-2">PRICE</p>
                <label>
                    <input type="checkbox" className="mr-2" /> Under $50
                </label>
                <label>
                    <input type="checkbox" className="mr-2" /> $50 - $100
                </label>
                <label>
                    <input type="checkbox" className="mr-2" /> Over $100
                </label>
            </div>
            {/* Product Cards Section */}
            <div className="flex-1 md:w-3/4 my-6 ">
                {loading ? (
                    <p>Loading products...</p>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {products.map((product, index) => (
                            <ProductCard product={product} key={index} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductPage;
