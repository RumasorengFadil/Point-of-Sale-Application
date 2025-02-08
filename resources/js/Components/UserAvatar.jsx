const UserAvatar = ({ src = "", alt = "User Avatar", size = "sm", className="", ...props }) => {
    return (
        <div {...props} className={`justify-center cursor-pointer flex  ${className}`}>
            <img
                className={`w-16 h-16 md:w-20 md:h-20  rounded-full border border-gray-400`}
                src={src}
                alt={alt}
            />
        </div>
    );
};

export default UserAvatar;
