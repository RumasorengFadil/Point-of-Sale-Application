export default function LabelWithIcon({
    active = false,
    className = "",
    children,
    label = "label",
    direction = "row",
    labelSize = "base",
    icon: Icon = "",
    iconSize = 24,
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
            className={`flex ${directionHelper} items-center gap-4 ${className}`}
        >
            {Icon ? <Icon size={iconSize} /> : null}
            {children ? children : <p className={`${labelSize}`}>{label}</p>}
        </div>
    );
}
