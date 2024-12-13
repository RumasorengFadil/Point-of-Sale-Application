export default function LabelWithIcon({
    active = false,
    className = "",
    children,
    label = "label",
    direction = "row",
    labelSize = "base",
    icon = "",
    ...props
}) {
    const directionHelper = {
        row: "flex-row",
        "row-reverse": "flex-row-reverse",
        col: "flex-col",
        "col-reverse": "flex-col-reverse",
    }[direction];
    return (
        <div
            {...props}
            className={`flex ${directionHelper} items-center justify-center gap-4 ${className}`}
        >
            {icon && icon}
            {children ? children : <p className={`${labelSize}`}>{label}</p>}
        </div>
    );
}

// const sizeHelper = {
//     sm: {
//         iconSize: 20,
//         labelSize: "sm",
//     },
//     base: {
//         iconSize: 24,
//         labelSize: "base",
//     },
//     md: {
//         iconSize: 28,
//         labelSize: "md",
//     },
// }[size];
