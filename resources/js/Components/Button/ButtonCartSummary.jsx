import { FaChevronRight } from "react-icons/fa";
import LabelWithIcon from "../LabelWithIcon";
import PrimaryButton from "../PrimaryButton";

export default function ButtonCartSummary({
    label = "Button",
    onClick = () => {},
    className = "",
    summary = 0,
    children,
    ...props
}) {
    return (
        <PrimaryButton
            {...props}
            onClick={onClick}
            className={
                "rounded py-2 px-4 flex w-full items-center justify-between bg-primary cursor-pointer shadow-md+ " +
                className
            }
        >
            {children || (
                <>
                    <h1 className="font-bold text-white">Rp. {summary}</h1>

                    <LabelWithIcon
                        direction="row-reverse"
                        label={label}
                        icon={FaChevronRight}
                        iconSize={20}
                    />
                </>
            )}
        </PrimaryButton>
    );
}
