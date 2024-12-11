export default function LabelWithIcon({
    active = false,
    className = "",
    children,
    label = "label",
    direction = "row",
    labelSize="base",
    icon = "",
    ...props
}) {
    return (
        <div
            {...props}
            className={`flex flex-${direction} items-center justify-center gap-4 ${className}`}
        >
            {icon && icon}
            {children ? (
                children
            ) : (
                <p className={`${labelSize}`}>{label}</p>
            )}
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