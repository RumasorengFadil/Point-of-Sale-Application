const Spinner = ({ size = "small" }) => {
    const sizes = {
        small: "w-4 h-4 border-2",
        medium: "w-6 h-6 border-4",
        large: "w-8 h-8 border-4",
    };

    return (
        <div
            className={`${sizes[size]} z-50 border-t-transparent border-blue-500 border-solid rounded-full animate-spin`}
            role="status"
            aria-label="Loading"
        />
    );
};

export default Spinner;
