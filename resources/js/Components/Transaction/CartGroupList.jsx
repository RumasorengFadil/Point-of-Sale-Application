import useCartStore from "@/store/useCartStore";
import { memo } from "react";
import { TiDelete } from "react-icons/ti";
import QuantityControl from "../QuantityControl ";
import findElementById from "@/utils/findElementById";
import ProductPriceAndDiscount from "../ProductPriceAndDiscount";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { calculateDiscount } from "@/utils/calculateDiscount";

export default memo(function CartGroupList({ cart, products }) {
    const handleDecreaseQty = useCartStore((state) => state.handleDecreaseQty);
    const handleIncreaseQty = useCartStore((state) => state.handleIncreaseQty);
    const handleDestroyFromCart = useCartStore(
        (state) => state.handleDestroyFromCart
    );
    return (
        <div className="flex flex-col w-full h-full space-y-2 mb-12">
            {cart.map((cart, i) => {
                const product = findElementById(products, cart.id);
                const discountedPrice = product.discount
                    ? calculateDiscount(product.price, product.discount) *
                      cart.quantity
                    : null;

                return (
                    <div
                        key={i}
                        className="flex w-full py-4 px-4 shadow-md+ rounded space-y-3 space-x-2"
                    >
                        <div className="w-16 h-16">
                            <img
                                className="w-full rounded"
                                src={`/storage/uploads/POS/img/products/${product.image}`}
                                alt=""
                            />
                        </div>

                        <div className="flex flex-1 space-x-2">
                            <div className="flex flex-col space-y-5 text-sm w-full">
                                <p>{product.name}</p>
                                <QuantityControl
                                    quantity={cart.quantity}
                                    onIncrease={() =>
                                        handleIncreaseQty(cart.id)
                                    }
                                    onDecrease={() =>
                                        handleDecreaseQty(cart.id)
                                    }
                                    className="space-x-16 lg:space-x-4"
                                />
                            </div>
                            <div className="flex flex-col text-sm justify-between w-full items-end">
                                <ProductPriceAndDiscount
                                    price={
                                        discountedPrice
                                            ? formatNumberWithDots(
                                                  product.price
                                              )
                                            : ""
                                    }
                                    discount={formatNumberWithDots(
                                        discountedPrice
                                    )}
                                />
                                <TiDelete
                                    onClick={() =>
                                        handleDestroyFromCart(product.id)
                                    }
                                    className="text-gray-400 cursor-pointer"
                                    size={15}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
});
