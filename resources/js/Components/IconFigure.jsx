import { FigCaption } from "./FigCaption";

export const IconFigure = ({
    icon: Icon,
    className,
    children,
    size = "base",
    position = "left",
    caption,
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
        <figure
            className={`flex flex-col space-y-2 ${className} items-${position}`}
        >
            {/* Icon */}
            {Icon && <Icon size={sizeHelper.iconSize} />}

            {/* Figcaption */}
            {children ? (
                children
            ) : (
                <div className={"text-" + sizeHelper.captionSize}>
                    {caption}
                </div>
            )}
        </figure>
    );
};
