import { BiSolidDrink } from "react-icons/bi";
import { ReactIconFigure } from "./ReactIconFigure";
import { IoFastFood } from "react-icons/io5";

export const CulinaryReactIconFigure = ({
    reactIcon,
    figCaption = "",
    className,
    children,
    size = "base",
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

    const reactIconHelper = {
        makanan: <IoFastFood size={sizeHelper.iconSize} />,
        minuman: <BiSolidDrink size={sizeHelper.iconSize} />,
    }[reactIcon];

    return (

        <ReactIconFigure 
            figCaption={figCaption}
            reactIcon={reactIconHelper}
            children={children}
            className={className}
            captionSize={sizeHelper.captionSize}
            isSelected = {isSelected}
            classNameIfTrue = {classNameIfTrue}
            classNameIfFalse = {classNameIfFalse}

        />
    );
};
