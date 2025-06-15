import { calculateDiscountAmount } from "@/utils/calculateDiscountAmount";
import findElementById from "@/utils/findElementById";
import { useMemo } from "react";

export const useCartDetails = (products = [], cart = []) => {

    const cartDetails = useMemo(() => {
        return cart.map((cartItem) => {
            const product = findElementById(products, cartItem.id);
    
            return {
                id: product.id,
                name: product.name,
                quantity: cartItem.quantity,
                unitPrice: product.price,
                categoryName : product.category.category_name,
                discountAmount:
                    calculateDiscountAmount(Number(product.price), Number(product.discount)) * cartItem.quantity,
                discountPercentage: product.discount,
            };
        });
    }, [products, cart]);
    

    return { cartDetails };
};
