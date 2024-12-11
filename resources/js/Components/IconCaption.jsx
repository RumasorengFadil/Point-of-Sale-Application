export const IconCaption = ({
    caption,
    className,
    children,
    size = "xs",
    isSelected=false,
    classNameIfTrue="",
    classNameIfFalse="",
    align = "center",
}) => {
    return (
        <figcaption
            className={`text-${align} text-${size} ${className} ${
                isSelected ? classNameIfTrue : classNameIfFalse
            }`}
        >
            {children ? children : caption}
        </figcaption>
    );
};
