import PrimaryButton from "@/Components/PrimaryButton";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { FaChevronRight } from "react-icons/fa6";

export default function ButtonCartSummary({
    label = "Button",
    onClick = () => {},
    cart,
    ...props
}) {
    return (
        <PrimaryButton
            {...props}
            onClick={()=>onClick()}
            className="rounded py-2 px-4 flex w-full items-center justify-between bg-primary cursor-pointer shadow-md+"
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
        </PrimaryButton>
    );
}
