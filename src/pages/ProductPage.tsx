import React, { useEffect, useState } from 'react';
import productApi from '../api/productApi';
import ProductCard from '../components/ProductCard';

const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<string>('');
    const [rating, setRating] = useState<string>('');

    useEffect(() => {
        const featchProduct = async () => {
            try {
                const productData = await productApi.getAll();
                setProducts(productData);
            }
            catch (error) { }
        }
        featchProduct();
    }, [])

    const handleCategoryChange = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
        );
    };

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategories.length > 0
            ? product.categoriesIds.some(category => selectedCategories.includes(category.name))
            : true;
        const matchesPrice = priceRange ? (priceRange === 'low' ? product.price < 100 : product.price >= 100) : true;
        const matchesRating = rating ? product.rating >= parseInt(rating) : true;

        return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });

    return (
        <div className="container mt-5">
            <h1 className="text-center">Danh Sách Sản Phẩm</h1>

            <div className="row">
                <div className="col-md-3">
                    <h5>Bộ Lọc</h5>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Tìm kiếm sản phẩm..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <h6>Danh mục</h6>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes('electronics')}
                                    onChange={() => handleCategoryChange('electronics')}
                                />
                                Điện tử
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes('clothing')}
                                    onChange={() => handleCategoryChange('clothing')}
                                />
                                Thời trang
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes('home')}
                                    onChange={() => handleCategoryChange('home')}
                                />
                                Nhà cửa
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <select
                            className="form-control"
                            value={priceRange}
                            onChange={(e) => setPriceRange(e.target.value)}
                        >
                            <option value="">Tất cả giá</option>
                            <option value="low">Dưới 100</option>
                            <option value="high">Từ 100 trở lên</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <select
                            className="form-control"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        >
                            <option value="">Tất cả đánh giá</option>
                            <option value="1">1 sao trở lên</option>
                            <option value="2">2 sao trở lên</option>
                            <option value="3">3 sao trở lên</option>
                            <option value="4">4 sao trở lên</option>
                        </select>
                    </div>
                </div>

                <div className="col-md-9">
                    <h5>Kết quả tìm kiếm</h5>
                    <div className="row">
                        {filteredProducts.map((product ,index )=> (
                            <ProductCard product={product} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;