import { memo } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import useUIStore from "@/store/UseUIStore";
import useCartStore from "@/store/useCartStore";
import BackBtn from "@/Components/BackBtn";
import { EmptyStateMessage } from "@/Components/EmptyStateMessage";
import ButtonCartSummary from "@/Components/Button/ButtonCartSummary";
import { Inertia } from "@inertiajs/inertia";
import { useTransactionCalculations } from "@/hooks/useTransactionCalculations ";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import findElementById from "@/utils/findElementById";
import CartItem from "@/Components/Transaction/CartItem";
import { formatProductData } from "@/utils/formatProductData";
import { calcDiscountedPrice } from "@/utils/calcDiscount";

export default memo(function Cart({ products, buttonSummary = true }) {
    // Store Hooks
    const showCart = useUIStore((state) => state.showCart);
    const setShowCart = useUIStore((state) => state.setShowCart);
    const cart = useCartStore((state) => state.cart);
    const handleClearCart = useCartStore((state) => state.handleClearCart);

    // Transaction Calculations
    const { total } = useTransactionCalculations(products, cart);
    
    // Render empty cart message
    const renderEmptyCartMessage = () => (
        <EmptyStateMessage
            className="h-full items-center w-full"
            message="Keranjang Kosong"
        />
    );

    // Render Cart Items
    const renderCartItems = () => (
        <div className="flex flex-col w-full h-full space-y-2 mb-12 overflow-auto">
            {cart.map((cartItem) => {
                const product = findElementById(products, cartItem.id);

                return (
                    <CartItem
                        key={cartItem.id}
                        cart={cartItem}
                        product={formatProductData(
                            product,
                            ({price, discountedPrice}) => ({
                                price: formatNumberWithDots(
                                    price * cartItem.quantity
                                ),
                                discountedPrice: formatNumberWithDots(
                                    discountedPrice * cartItem.quantity
                                ),
                            })
                        )}
                    />
                );
            })}
        </div>
    );

    // Render Summary Button
    const renderSummaryButton = () => (
        <div className="flex flex-col w-full py-4 z-50">
            <ButtonCartSummary
                label="bayar"
                summary={formatNumberWithDots(total)}
                disabled={!cart.length}
                onClick={() => Inertia.get(route("transaction.create"))}
            />
        </div>
    );

    return (
        <div
            className={`${
                showCart ? "-translate-x-0" : "translate-x-full"
            } flex fixed top-0 transition-all w-full space-y-4 flex-col py-4 px-4 items-start h-full min-w-60 bg-white overflow-y-auto lg:py-0 lg:static lg:translate-x-0`}
        >
            <div className="flex w-full items-center justify-between">
                <BackBtn
                    onClick={() => setShowCart(!showCart)}
                    title="Keranjang"
                    iconClassName="lg:hidden"
                />
                <RiDeleteBinFill
                    onClick={handleClearCart}
                    className="cursor-pointer"
                    size={20}
                />
            </div>

            {!cart.length ? renderEmptyCartMessage() : renderCartItems()}

            {buttonSummary && renderSummaryButton()}
        </div>
    );
});
