import { MdArrowBack } from "react-icons/md";

export default function BackBtn({ className = "", title="Kembali", ...props }) {
    return (
        <div className="flex items-center w-full gap-2 px-4">
            <MdArrowBack
                onClick={() => window.history.back()}
                className="cursor-pointer"
                size={24}
            />
            <p className="font-medium">{title}</p>
        </div>
    );
}
