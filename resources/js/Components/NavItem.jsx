import { Link } from "@inertiajs/react";

const NavItem = ({
    href,
    icon: Icon,
    label,
    isActive,
    isHidden,
    onClick,
    className,
}) => {
    return (
        <Link
            onClick={onClick}
            href={href}
            className={`flex flex-col cursor-pointer w-full | lg:w-20 | h-20 rounded space-y-2 items-center justify-center p-2 ${
                isActive ? "bg-primary" : "bg-white"
            } ${isHidden ? "lg:hidden hidden" : ""} ${className}`}
        >
            <div>
                <Icon
                    className={`${isActive ? "text-white" : "text-gray-900"}`}
                    size={24}
                />
            </div>
            <p
                className={`text-xs ${
                    isActive ? "text-white" : "text-gray-900"
                }`}
            >
                {label}
            </p>
        </Link>
    );
};

export default NavItem;
