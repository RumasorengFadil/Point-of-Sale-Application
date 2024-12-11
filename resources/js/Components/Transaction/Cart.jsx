import { useTransactionContext } from "@/Context/TransactionContext";
import { memo } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import FloatingCartSummary from "./FloatingCartSummary";
import { MdArrowBack } from "react-icons/md";
import { Inertia } from "@inertiajs/inertia";
import useUIStore from "@/store/useUiStore";

export default memo(function Cart({ children, show = false }) {
    const showCart = useUIStore((state) => state.showCart);
    const setShowCart = useUIStore((state) => state.setShowCart);
    return (
        <div
            className={`${
                showCart || show ? "-translate-x-0" : "translate-x-full"
            } flex fixed top-0 transition-all w-full gap-8 flex-col py-4 px-4 items-start h-full bg-white overflow-y-auto | lg:py-4 lg:static lg:translate-x-0 | `}
        >
            <div className="flex w-full items-center justify-between ">
                <h1 className="flex items-center space-x-2">
                    <MdArrowBack
                        onClick={() => setShowCart(!showCart)}
                        className="cursor-pointer lg:hidden"
                        size={24}
                    />
                    <span className="font-semibold">Keranjang</span>
                </h1>
                <RiDeleteBinFill
                    // onClick={handleClearCart}
                    className="cursor-pointer"
                    size={20}
                />
            </div>

            {children}

            {/* Floating Cart Summary */}
            <FloatingCartSummary
                onClick={() => Inertia.get(route("transaction.create"))}
                label="Bayar"
            />
        </div>
    );
});
// if (product.category.category_name !== category) return;
