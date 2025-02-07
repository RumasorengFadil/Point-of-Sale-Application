import { Link } from "@inertiajs/react";

export default function ActionableIcon({
    icon: Icon,
    size = 24,
    className = "",
    ...props
}) {
    return (
        <Link {...props} className={" " + className}>
            <Icon className="cursorpointer" size={size} />
        </Link>
    );
}
