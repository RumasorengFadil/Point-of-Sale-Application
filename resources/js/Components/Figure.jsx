import { FigCaption } from "./FigCaption"

export const Figure = ({ src, figCaption="", className, children, rounded="", alt }) => {
    return (
        <figure className={"flex flex-col space-y-2 " + className}>
            <img className={`w-full rounded-${rounded}`} src={src} alt={alt} />
            {children ? children : <FigCaption caption={figCaption} />}
        </figure>
    )
}