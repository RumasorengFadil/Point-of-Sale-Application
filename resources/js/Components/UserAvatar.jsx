const UserAvatar = ({ avatar = "", alt = "User Avatar", size = "sm", className="", defaultAvatar = "/images/common/user-default-picture.png", ...props }) => {
    return (
        <div {...props} className={`justify-center cursor-pointer flex  ${className}`}>
            <img
                className={`w-16 h-16 md:w-20 md:h-20  rounded-full border border-gray-400`}
                src={avatar?avatar:defaultAvatar}
                alt={alt}
            />
        </div>
    );
};

export default UserAvatar;
