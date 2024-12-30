import { Link } from "@inertiajs/react";

export default function ActionableIcon ({
    icon: Icon,
    size = 24,
    className="",
    onCLick = () =>{},
    href = "",
}) {
    return (
        <Link
            onCLick={onCLick}
            href={href}
            className={" " + className}
        >
            <Icon className="cursorpointer" size={size} />
        </Link>
    );
}
