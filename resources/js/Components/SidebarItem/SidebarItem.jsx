import { Link } from "@inertiajs/react";
import LabelWithIcon from "../LabelWithIcon";

const SidebarItem = ({
    href,
    icon: Icon,
    label,
    isActive,
    onClick,
    className,
}) => {
    return (
        <Link onClick={onClick} href={href} className={" " + className}>
            <LabelWithIcon
                className={`${
                    isActive
                        ? "bg-gray-100 rounded before:border-primary before:py-2 before:border-2 before:rounded-full"
                        : "before:py-2 before:border-2 before:rounded-full"
                } py-2 cursor-pointer`}
                label={label}
                icon={Icon}
            />
        </Link>
    );
};

export default SidebarItem;
