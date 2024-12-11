import { MdArrowBack } from "react-icons/md";

export default function BackBtn({ className = "", title="Kembali", onClick, ...props }) {
    return (
        <div className={`flex items-center space-x-2 ${className}`}>
            <MdArrowBack
                {...props}
                onClick={onClick}
                className="cursor-pointer"
                size={24}
            />
            <p className="font-medium">{title}</p>
        </div>
    );
}
