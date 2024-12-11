import useCartStore from "@/store/useCartStore";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { memo, useState } from "react";

export default memo(function Product({ product }) {
    const handleAddToCart = useCartStore((state)=>state.handleAddToCart);
    const [isBlinking, setIsBlinking] = useState(false);

    const handleClick = () => {
        setIsBlinking(true);
    
        // Hentikan animasi setelah selesai
        setTimeout(() => setIsBlinking(false), 500);
    
        // Panggil callback untuk menambah produk ke keranjang
        handleAddToCart(product);
      };

    return (
        <div
            onClick={() => handleClick(product)}
            key={product.id}
            className={`flex w-full max-h-max flex-col items-center justify-center space-y-3 bg-white p-10 text-xs shadow-md+ rounded cursor-pointer transition-all duration-500 ${
                isBlinking ? "opacity-40" : ""
            }`}
        >
            <img
                className="w-24 h-20 rounded"
                src={`/storage/uploads/POS/img/products/${product.image}`}
                alt=""
            />
            <p>Rp. {formatNumberWithDots(product.price)}</p>
            <p className="font-bold">{product.name}</p>
        </div>
    );
});
// if (product.category.category_name !== category) return;
