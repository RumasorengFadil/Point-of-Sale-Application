import ButtonCartSummary from "@/Components/Button/ButtonCartSummary";
import useCartStore from "@/store/useCartStore";
import useUIStore from "@/store/UseUIStore";
import { Inertia } from "@inertiajs/inertia";

export default function ButtonPay({
    className = "",
}) {
    const cart = useCartStore((state) => state.cart);
    const showCart = useUIStore((state) => state.showCart);

    return (
        <div
            className={`flex flex-col w-full px-4 py-4 ${className} ${showCart?"":"hidden"} lg:flex z-50`}
        >
            <ButtonCartSummary
                label={"bayar"}
                cart={cart}
                showCart={showCart}
                disabled = {!cart.length}
                onClick={() => Inertia.get(route("transaction.create"))}

            />
        </div>
    );
}
