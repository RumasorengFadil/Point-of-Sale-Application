import Spinner from "@/Components/Spinner";

const SpinnerWithLabel = ({ size = "small", label = "Mohon Ditunggu..." }) => {
    const sizes = {
        small: "w-4 h-4 border-2",
        medium: "w-6 h-6 border-4",
        large: "w-8 h-8 border-4",
    };

    return (
        <div className="flex items-center space-x-2">
            <Spinner size={size}/>
            <p className="text-sm">{label}</p>
        </div>
    );
};

export default SpinnerWithLabel;