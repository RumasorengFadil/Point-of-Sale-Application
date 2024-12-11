import { useForm, usePage } from "@inertiajs/react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

// Buat Context
const TransactionContext = createContext();

// Custom Hook untuk menggunakan TransactionContext
export function useTransactionContext() {
    return useContext(TransactionContext);
}

// SESSION KEY
const SESSION_KEY = "cart";

// Komponen Provider untuk membungkus komponen lain
export function TransactionProvider({ children }) {
    const { props } = usePage();
    const [category, setCategory] = useState(
        props.categories[0].category_name
    );
    const [showCart, setShowCart] = useState(false);

    const getSessionCart = () => {
        try {
            const data = sessionStorage.getItem(SESSION_KEY);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error("Error reading cart from session:", error);
            return [];
        }
    };

    const [cart, setCart] = useState(getSessionCart);

    // Sinkronisasi cart dengan sessionStorage
    useEffect(() => {
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(cart));
    }, [cart]);

    const updateCartItem = (id, callback) => {
        setCart((prevCart) =>
            prevCart.map((item) => (item.id === id ? callback(item) : item))
        );
    };

    const handleAddToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [
                ...prevCart,
                {
                    id: product.id,
                    name: product.name,
                    quantity: 1,
                    unitPrice: product.price,
                    image: product.image,
                },
            ];
        });
    };

    const handleIncreaseQty = (id) => {
        updateCartItem(id, (item) => ({
            ...item,
            quantity: item.quantity + 1,
        }));
    };

    const handleDecreaseQty = (id) => {
        updateCartItem(id, (item) =>
            item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
    };

    const handleDestroyFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const handleClearCart = () => setCart([]);

    const value = useMemo(() => ({
        category,
        setCategory,
        cart,
        setCart,
        handleAddToCart,
        handleIncreaseQty,
        handleDecreaseQty,
        handleDestroyFromCart,
        handleClearCart,
        showCart,
        setShowCart
        // errors // Sertakan errors jika diperlukan untuk handling
    }));

    return (
        <TransactionContext.Provider value={value}>
            {children}
        </TransactionContext.Provider>
    );
}
