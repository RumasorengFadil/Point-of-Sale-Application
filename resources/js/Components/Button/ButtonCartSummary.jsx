import PrimaryButton from "@/Components/PrimaryButton";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { FaChevronRight } from "react-icons/fa6";
import LabelWithIcon from "../LabelWithIcon";

export default function ButtonCartSummary({
    label = "Button",
    onClick = () => {},
    cart = [],
    className = "",
    ...props
}) {
    return (
        <PrimaryButton
            {...props}
            onClick={() => onClick()}
            className={"rounded py-2 px-4 flex w-full items-center justify-between bg-primary cursor-pointer shadow-md+ " + className}
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

            <LabelWithIcon
                direction="row-reverse"
                label={label}
                icon={<FaChevronRight size={20} />}
            />
        </PrimaryButton>
    );
}
