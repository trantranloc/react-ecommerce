import React from "react";
import Carousel from "../layouts/Carousel";
import Product from "../components/Product";

export default function HomePage() {
    const products = [
        {
            name: "Fancy Product",
            price: "$40.00 - $80.00",
            image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        },
        {
            name: "Special Item",
            price: "$18.00",
            oldPrice: "$20.00",
            image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            isSale: true,
            rating: 5,
        },
        {
            name: "Sale Item",
            price: "$25.00",
            oldPrice: "$50.00",
            image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            isSale: true,
        },
        {
            name: "Popular Item",
            price: "$40.00",
            image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            rating: 5,
        },
        {
            name: "Popular Item",
            price: "$40.00",
            image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            rating: 5,
        },
        {
            name: "Popular Item",
            price: "$40.00",
            image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            rating: 5,
        },
    ];

    return (
        <div className="container mt-5">
            <Carousel />
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {products.map((product, index) => (
                    <Product product={product} key={index} />
                ))}
            </div>

        </div>
    );
};