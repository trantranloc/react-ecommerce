interface Cart {
    id: string;
    userId: string;
    items: CartItem[];
    createdAt: string;
    updateAt: string;
}

interface CartItem {
    id: string;
    quantity: number;
    product: Product
}
