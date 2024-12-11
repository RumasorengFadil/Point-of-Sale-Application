import PrimaryButton from "@/Components/PrimaryButton";
import useCartStore from "@/store/useCartStore";
import useUIStore from "@/store/UseUIStore";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { FaChevronRight } from "react-icons/fa6";

export default function FloatingCartSummary({
    className = "",
    label = "Button",
    onClick = () => {},
}) {
    const cart = useCartStore((state) => state.cart);
    const showCart = useUIStore((state) => state.showCart);
    const setShowCart = useUIStore((state) => state.setShowCart);

    return (
        <div className={`flex flex-col px-4 py-4 ${className}`}>
            <PrimaryButton
                onClick={() => onClick(showCart, setShowCart)}
                className="rounded py-2 px-4  flex w-full items-center justify-between bg-primary cursor-pointer shadow-md+"
            >
                <h1 className="font-bold text-white">
                    Rp.{" "}
                    {formatNumberWithDots(
                        cart?.reduce((accumulator, product) => {
                            return (
                                accumulator +
                                product.unitPrice * product.quantity
                            );
                        }, 0)
                    )}
                </h1>

                <div className="flex space-x-2 items-center text-white">
                    <p>{label}</p>
                    <FaChevronRight
                        // onClick={handleClearCart}
                        className="cursor-pointer"
                        size={20}
                    />
                </div>
            </PrimaryButton>
        </div>
    );
}
