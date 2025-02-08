import { Link } from "@inertiajs/react";
import LabelWithIcon from "../LabelWithIcon";

const SidebarItemLink = ({
    href,
    icon: Icon,
    label,
    isActive,
    onClick,
    className,
    isHidden = false,
    bar = true,
}) => {
    return (
        <Link
            onClick={onClick}
            href={href}
            className={`${className} ${isHidden ? "lg:hidden hidden" : ""}`}
        >
            <LabelWithIcon
                className={`${
                    isActive
                        ? "bg-gray-100 rounded before:border-primary before:py-2 before:border-2 before:rounded-full"
                        : bar
                        ? "before:py-2 before:border-2 before:rounded-full"
                        : ""
                } py-2 cursor-pointer`}
                label={label}
                icon={Icon}
            />
        </Link>
    );
};

export default SidebarItemLink;
