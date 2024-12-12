import { memo } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import useUIStore from "@/store/UseUIStore";
import useCartStore from "@/store/useCartStore";
import CartGroupList from "@/Components/Transaction/CartGroupList";
import BackBtn from "@/Components/BackBtn";
import { EmptyStateMessage } from "@/Components/EmptyStateMessage";
import ButtonCartSummary from "@/Components/Button/ButtonCartSummary";
import { Inertia } from "@inertiajs/inertia";

export default memo(function Cart({ buttonSummary = true }) {
    const showCart = useUIStore((state) => state.showCart);
    const setShowCart = useUIStore((state) => state.setShowCart);
    const cart = useCartStore((state) => state.cart);
    const handleClearCart = useCartStore((state) => state.handleClearCart);
    return (
        <div
            className={`${
                showCart ? "-translate-x-0" : "translate-x-full"
            } flex fixed top-0 transition-all w-full space-y-4 flex-col py-4 px-4 items-start h-full min-w-60  bg-white overflow-y-auto lg:py-0 lg:static lg:translate-x-0 `}
        >
            <div className="flex w-full items-center justify-between ">
                <BackBtn
                    onClick={() => setShowCart(!showCart)}
                    title="Keranjang"
                    iconClassName={"lg:hidden"}
                />

                <RiDeleteBinFill
                    onClick={handleClearCart}
                    className="cursor-pointer"
                    size={20}
                />
            </div>

            {!cart.length && (
                <EmptyStateMessage
                    className="h-full items-center w-full"
                    message="Keranjang Kosong"
                />
            )}

            <CartGroupList />

            {buttonSummary && (
                <div className={`flex flex-col w-full py-4 z-50`}>
                    <ButtonCartSummary
                        label={"bayar"}
                        cart={cart}
                        disabled={!cart.length}
                        onClick={() => Inertia.get(route("transaction.create"))}
                    />
                </div>
            )}
        </div>
    );
});
