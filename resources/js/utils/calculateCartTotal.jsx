import { calculateDiscount } from "./calculateDiscount";

export const calculateCartTotal = (cart, products) =>{
    if (!Array.isArray(cart) || !Array.isArray(products)) {
        console.error("Cart atau products tidak valid.");
        return 0;
    }

    return cart.reduce((accumulator, product) => {
        const productDetails = products.find((p) => p.id === product.id);

        if (!productDetails) {
            console.error(`Produk dengan ID ${product.id} tidak ditemukan.`);
            return accumulator;
        }

        const { price, discount } = productDetails;
        const discountedPrice = calculateDiscount(price, discount);

        return accumulator + discountedPrice * product.quantity;
    }, 0);
}
