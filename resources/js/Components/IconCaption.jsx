export const IconCaption = ({
    caption,
    className,
    children,
    size = "xs",
    isSelected=false,
    classNameIfTrue="",
    classNameIfFalse="",
}) => {
    return (
        <figcaption
            className={`text-center text-${size} ${className} ${
                isSelected ? classNameIfTrue : classNameIfFalse
            }`}
        >
            {children ? children : caption}
        </figcaption>
    );
};
