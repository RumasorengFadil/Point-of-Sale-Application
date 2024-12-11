import { useTransactionContext } from "@/Context/TransactionContext";
import useUIStore from "@/store/useUiStore";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { FaChevronRight } from "react-icons/fa6";

export default function FloatingCartSummary({
    className = "",
    label = "Button",
    onClick = () => {},
}) {
    const { cart } = useTransactionContext();
    const showCart = useUIStore((state) => state.showCart);
    const setShowCart = useUIStore((state) => state.setShowCart);
    return (
        <div
            onClick={() => onClick(showCart, setShowCart)}
            className={`rounded pl-5 pr-2 py-2  flex w-full items-center justify-between bg-primary cursor-pointer shadow-md+ ${className}`}
        >
            <h1 className="font-bold text-white">
                Rp.{" "}
                {formatNumberWithDots(
                    cart?.reduce((accumulator, product) => {
                        return (
                            accumulator + product.unitPrice * product.quantity
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
        </div>
    );
}
