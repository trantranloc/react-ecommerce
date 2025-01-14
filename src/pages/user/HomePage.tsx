/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import Carousel from "../../layouts/user/UserCarousel";
import ProductCard from "../../components/ProductCard";
import productApi from "../../api/productApi";

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


    return (
        <>
            <Carousel />
            {/* SHOP BY CATEGORY */}
            <div className="md:container mx-auto py-5">
                <p className="text-2xl font-bold mb-4 m-2 ">SHOP BY CATEGORY</p>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 m-2">
                    <div className="relative border border-primary lg:h-60 sm:h-40 h-40 ">
                        <img src="path/to/your/image.jpg" alt="Image description" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-white text-lg font-bold">Chữ của bạn</p>
                        </div>
                    </div>
                    <div className="relative border border-primary lg:h-60 sm:h-40 h-40 ">
                        <img src="path/to/your/image.jpg" alt="Image description" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-white text-lg font-bold">Chữ của bạn</p>
                        </div>
                    </div>
                    <div className="relative border border-primary lg:h-60 sm:h-40 h-40 ">
                        <img src="path/to/your/image.jpg" alt="Image description" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-white text-lg font-bold">Chữ của bạn</p>
                        </div>
                    </div>
                    <div className="relative border border-primary lg:h-60 sm:h-40 h-40 ">
                        <img src="path/to/your/image.jpg" alt="Image description" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-white text-lg font-bold">Chữ của bạn</p>
                        </div>
                    </div>
                    <div className="relative border border-primary lg:h-60 sm:h-40 h-40 ">
                        <img src="path/to/your/image.jpg" alt="Image description" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-white text-lg font-bold">Chữ của bạn</p>
                        </div>
                    </div>
                    <div className="relative border border-primary lg:h-60 sm:h-40 h-40 ">
                        <img src="path/to/your/image.jpg" alt="Image description" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-white text-lg font-bold">Chữ của bạn</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Recomended for you */}
            <div className="md:container mx-auto py-5">
                <p className="text-2xl font-bold mb-4 m-2">RECOMENDED FOR YOU</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 m-2">
                    {products.map((product, index) => (
                        <ProductCard product={product} key={index} />
                    ))}
                </div>
            </div>
        </>
    );
};