import ButtonCartSummary from "@/Components/Button/ButtonCartSummary";
import useCartStore from "@/store/useCartStore";
import useUIStore from "@/store/UseUIStore";

export default function ButtonNextToCart({ className = "" }) {
    const cart = useCartStore((state) => state.cart);
    const showCart = useUIStore((state) => state.showCart);
    const setShowCart = useUIStore((state) => state.setShowCart);

    return (
        <div className={`flex flex-col px-4 lg:hidden ${className}`}>
            <ButtonCartSummary
                label={"Lanjut"}
                cart={cart}
                onClick={() => setShowCart(!showCart)}
            />
        </div>
    );
}
