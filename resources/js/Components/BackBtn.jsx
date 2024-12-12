import { MdArrowBack } from "react-icons/md";

export default function BackBtn({
    className = "",
    title = "Kembali",
    onClick,
    hidden = false,
    hiddenIcon = false,
    iconClassName,
    ...props
}) {
    return (
        <div
            className={`flex items-center space-x-2 ${className} ${
                hidden ? "hidden" : ""
            }`}
        >
            <MdArrowBack
                {...props}
                onClick={onClick}
                className={`cursor-pointer ${iconClassName}`}
                size={24}
            />
            <p className="font-medium">{title}</p>
        </div>
    );
}
