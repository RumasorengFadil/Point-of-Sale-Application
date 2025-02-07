const UserAvatar = ({ src = "", alt = "User Avatar", size = "w-20 h-20" }) => {
    return (
        <div className="justify-center px-6 cursor-pointer flex">
            <img
                className={`${size} rounded-full border border-gray-400`}
                src={src}
                alt={alt}
            />
        </div>
    );
};

export default UserAvatar;
