import Carousel from "../../layouts/user/UserCarousel";
import ProductCard from "../../components/ProductCard";
import productApi from "../../api/productApi";
import CategoryItem from "../../components/CategoryItem";
import { useEffect, useState } from "react";

export default function HomePage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loadingProducts, setLoadingProducts] = useState(true);
    const [loadingCategories, setLoadingCategories] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await productApi.getAll();
                setProducts(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoadingProducts(false);
            }
        };

        const fetchCategories = async () => {
            try {
                const data = await productApi.getCategories();
                setCategories(data.slice(0,6));
                console.log(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoadingCategories(false);
            }
        };

        Promise.all([fetchCategories(), fetchProducts()]);
    }, []);

    if (loadingProducts || loadingCategories) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Carousel />
            {/* SHOP BY CATEGORY */}
            <div className="md:container mx-auto py-5">
                <p className="text-2xl font-bold mb-4 m-2">SHOP BY CATEGORY</p>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 m-2">
                    {categories.map((category) => (
                        <CategoryItem key={category.id} category={category} />
                    ))}
                </div>
            </div>
            {/* RECOMMENDED FOR YOU */}
            <div className="md:container mx-auto py-5">
                <p className="text-2xl font-bold mb-4 m-2">RECOMMENDED FOR YOU</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 m-2">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
}
