/* eslint-disable @typescript-eslint/no-unused-vars */
interface Product {
    id: string;
    image: string;
    title: string; 
    description: string;
    price: number;
    quantity: number;
    createdAt: string; 
    updateAt: string;  
    categoriesIds: Category[]; 
    isSale?: boolean; 
    oldPrice?: number; 
    rating: number; 
}

interface ProductProps {
    product: Product;
}
