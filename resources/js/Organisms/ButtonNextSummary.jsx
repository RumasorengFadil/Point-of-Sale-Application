import ButtonCartSummary from "@/Components/Button/ButtonCartSummary";
import { useTransactionCalculations } from "@/hooks/useTransactionCalculations ";
import useCartStore from "@/store/useCartStore";
import useUIStore from "@/store/UseUIStore";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { memo } from "react";

export default memo(function ButtonNextSummary({ products, className = "" }) {
    const cart = useCartStore((state) => state.cart);
    const showCart = useUIStore((state) => state.showCart);
    const setShowCart = useUIStore((state) => state.setShowCart);
    const { total } = useTransactionCalculations(products, cart);
    return (
        <div className={`flex flex-col px-4 lg:hidden ${className}`}>
            <ButtonCartSummary
                label={"Cart"}
                summary={formatNumberWithDots(total)}
                onClick={() => setShowCart(!showCart)}
            />
        </div>
    );
});
