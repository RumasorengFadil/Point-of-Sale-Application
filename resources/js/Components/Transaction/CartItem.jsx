import useCartStore from "@/store/useCartStore";
import { memo } from "react";
import { TiDelete } from "react-icons/ti";
import QuantityControl from "../QuantityControl ";
import ProductPrice from "../ProductPrice";
import DiscountedPrice from "@/Components/DiscountedPrice";

const CartItemImage = ({ src, alt }) => (
    <div className="w-16 h-16">
        <img className="w-full h-full rounded" src={src} alt={alt} />
    </div>
);

const CartItemDetails = ({ product, cart, onIncrease, onDecrease }) => (
    <div className="flex flex-1 space-x-2">
        <div className="flex flex-col space-y-5 text-sm w-full">
            <p>{product.name}</p>
            <QuantityControl
                quantity={cart.quantity}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                className="space-x-16 lg:space-x-4"
            />
        </div>
        <div className="flex flex-col text-sm justify-between w-full items-end">
            <div>
                <ProductPrice
                    className={product.discount ? "line-through" : "font-semibold"}
                    price={product.price}
                />
                {product.discount > 0 && (
                    <DiscountedPrice
                        className="font-semibold"
                        discountedPrice={product.discountedPrice}
                    />
                )}
            </div>
        </div>
    </div>
);

const CartItemActions = ({ onDelete }) => (
    <TiDelete
        onClick={onDelete}
        className="text-gray-400 cursor-pointer"
        size={15}
    />
);

const CartItem = memo(({ cart, product }) => {
    const handleDecreaseQty = useCartStore((state) => state.handleDecreaseQty);
    const handleIncreaseQty = useCartStore((state) => state.handleIncreaseQty);
    const handleDestroyFromCart = useCartStore((state) => state.handleDestroyFromCart);

    const productImageSrc = `/storage/uploads/POS/img/products/${product.image}`;
    const productImageAlt = product.name;

    const onDelete = () => handleDestroyFromCart(product.id);
    const onIncrease = () => handleIncreaseQty(cart.id);
    const onDecrease = () => handleDecreaseQty(cart.id);

    return (
        <div className="flex w-full py-4 px-4 shadow-md+ rounded space-y-3 space-x-2">
            <CartItemImage src={productImageSrc} alt={productImageAlt} />
            <CartItemDetails cart = {cart} product={product} onIncrease={onIncrease} onDecrease={onDecrease} />
            <CartItemActions onDelete={onDelete} />
        </div>
    );
});

export default CartItem;
