import useCartStore from "@/store/useCartStore";
import { memo, useState } from "react";
import { Figure } from "../Figure";
import ProductPriceAndDiscount from "../ProductPriceAndDiscount";
import { calculateDiscount } from "@/utils/calculateDiscount";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";

export default memo(function Product({ product }) {
    const handleAddToCart = useCartStore((state) => state.handleAddToCart);
    const [isBlinking, setIsBlinking] = useState(false);

    const handleClick = () => {
        setIsBlinking(true);

        // Hentikan animasi setelah selesai
        setTimeout(() => setIsBlinking(false), 500);

        // Panggil callback untuk menambah produk ke keranjang
        handleAddToCart(product);
    };

    const discountedPrice = product.discount
        ? calculateDiscount(product.price, product.discount)
        : null;

    return (
        <div
            onClick={() => handleClick(product)}
            key={product.id}
            className={`flex w-full max-h-52 flex-col items-center justify-center space-y-3 bg-white p-10 text-xs shadow-md+ rounded cursor-pointer transition-all duration-500 ${
                isBlinking ? "opacity-40" : ""
            }`}
        >
            <Figure
                rounded="md"
                className="w-24 text-center"
                src={`/storage/uploads/POS/img/products/${product.image}`}
            >
                <ProductPriceAndDiscount
                    price={formatNumberWithDots(product.price)}
                    discount={
                        discountedPrice
                            ? formatNumberWithDots(discountedPrice)
                            : ""
                    }
                />
                <p className="font-bold">{product.name}</p>
            </Figure>
        </div>
    );
});
