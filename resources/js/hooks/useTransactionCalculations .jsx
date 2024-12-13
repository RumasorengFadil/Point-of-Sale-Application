import usePaidAmountStore from "@/store/usePaidAmountStore";
import { calculateDiscountAmount } from "@/utils/calculateDiscountAmount";
import findElementById from "@/utils/findElementById";
import { useMemo } from "react";

export const useTransactionCalculations = (products = [], cart = []) => {
    const paidAmount = usePaidAmountStore((state) => state.paidAmount);

    const subtotal = useMemo(() => {
        return cart.reduce((accumulator, cartItem) => {
            const product = findElementById(products, cartItem.id);
            if (!product) return accumulator; // Pastikan produk ditemukan
            return accumulator + product.price * cartItem.quantity;
        }, 0);
    }, [products, cart]);

    const discount = useMemo(() => {
        return cart.reduce((accumulator, cartItem) => {
            const product = findElementById(products, cartItem.id);
            if (!product) return accumulator; // Pastikan produk ditemukan
            return (
                accumulator +
                calculateDiscountAmount(product.price, product.discount) *
                    cartItem.quantity
            );
        }, 0);
    }, [products, cart]);
    
    const total = useMemo(() => subtotal - discount, [subtotal, discount]);

    const change = useMemo(() => paidAmount - total, [paidAmount, total]);

    return { subtotal, discount, total, paidAmount, change };
};

