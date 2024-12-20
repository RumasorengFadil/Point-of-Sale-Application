import { memo, useState } from "react";
import { Figure } from "../Figure";
import ProductPrice from "../ProductPrice";
import DiscountedPrice from "../DiscountedPrice";
import getProductImagePath from "@/utils/pathHelper";
import Card from "../Card";

export default memo(function ProductItem({ product, onClick }) {
    const { id, name, image, price, discount, discountedPrice = 0 } = product;
    const [isBlinking, setIsBlinking] = useState(false);

    const handleBlinking = () => {
        setIsBlinking({ isBlinking: true, productId: product.id });

        setTimeout(() => setIsBlinking(false), 500); // Hentikan animasi setelah selesai
    };
    return (
        <Card
            onClick={() => {
                onClick();
                handleBlinking();
            }}
            key={id}
            className={`flex w-full h-52 flex-col py-10 items-center justify-center space-y-3 bg-white text-xs transition-all duration-500 ${
                isBlinking ? "opacity-40" : ""
            }`}
        >
            <Figure
                alt={name}
                rounded="md"
                className="w-24 text-center"
                src={getProductImagePath(image)}
            >
                <div>
                    <ProductPrice
                        className={discount ? "line-through" : ""}
                        price={price}
                    />
                    {discount > 0 && (
                        <DiscountedPrice discountedPrice={discountedPrice} />
                    )}
                </div>
                <p className="font-bold">{name}</p>
            </Figure>
        </Card>
    );
});
