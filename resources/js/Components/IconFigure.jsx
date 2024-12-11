import { IconCaption } from "./IconCaption";

export const IconFigure = ({
    src,
    figCaption = "",
    className,
    children,
    size = "base",
    rounded = "",
    isSelected = false,
    classNameIfTrue = "",
    classNameIfFalse = "",
}) => {
    const sizeHelper = {
        sm: {
            iconSize: 20,
            captionSize: "xs",
        },
        base: {
            iconSize: 24,
            captionSize: "xs",
        },
        md: {
            iconSize: 28,
            captionSize: "sm",
        },
    }[size];
    return (
        <figure className={"flex flex-col space-y-2 " + className}>
            {/* Icon */}
            {src && (
                <img
                    className={`w-full rounded-${rounded} ${
                        sizeHelper.iconSize
                    } ${isSelected} ${
                        isSelected ? classNameIfTrue : classNameIfFalse
                    }`}
                    src={src}
                    alt=""
                />
            )}

            {/* Figcaption */}
            {children ? (
                children
            ) : (
                <IconCaption
                    size={sizeHelper.captionSize}
                    isSelected={isSelected}
                    classNameIfTrue={classNameIfTrue}
                    classNameIfFalse={classNameIfFalse}
                    caption={figCaption}
                />
            )}
        </figure>
    );
};
