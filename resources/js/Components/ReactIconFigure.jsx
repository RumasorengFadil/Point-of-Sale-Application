import { IconCaption } from "./IconCaption";

export const ReactIconFigure = ({
    reactIcon,
    figCaption = "",
    className,
    children,
    captionSize = "xs",
    isSelected = false,
    classNameIfTrue = "",
    classNameIfFalse = "",
}) => {
    return (
        <figure className={`flex flex-col space-y-2 ${className} ${isSelected ? classNameIfTrue : classNameIfFalse}`}>
            {/* Icon */}
                {reactIcon && reactIcon}

            {/* Figcaption */}
            {children ? (
                children
            ) : (
                <IconCaption
                    size={captionSize}
                    caption={figCaption}
                />
            )}
        </figure>
    );
};
