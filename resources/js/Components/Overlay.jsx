const Overlay = ({ overlay = false, clear = true, ...props }) => {
    return (
        overlay && (
            <div
                {...props}
                className={`fixed inset-0 z-10 ${
                    !clear ? "bg-gray-700 opacity-50" : ""
                }`}
                aria-hidden="true"
            ></div>
        )
    );
};

export default Overlay;
