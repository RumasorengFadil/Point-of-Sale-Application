import ButtonCartSummary from "@/Components/Button/ButtonCartSummary";
import useCartStore from "@/store/useCartStore";
import useUIStore from "@/store/UseUIStore";

export default function ButtonNextSummary({ className = "" }) {
    const cart = useCartStore((state) => state.cart);
    const showCart = useUIStore((state) => state.showCart);
    const setShowCart = useUIStore((state) => state.setShowCart);

    return (
        <div className={`flex flex-col px-4 lg:hidden ${className}`}>
            <ButtonCartSummary
                label={"Cart"}
                cart={cart}
                onClick={() => setShowCart(!showCart)}
            />
        </div>
    );
}
