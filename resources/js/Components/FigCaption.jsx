export const FigCaption = ({ caption, className, children, size="sm" }) => {
    return (
        <figcaption className={`text-center text-${size} ${className}`}>
            {children ? children : caption}
        </figcaption>
    )
}