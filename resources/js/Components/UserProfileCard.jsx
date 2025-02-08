const UserProfileCard = ({
    name,
    description,
    avatar,
    defaultAvatar = "/images/common/user-default-picture.png",
    className = "",
    size = "regular",
    ring = "white"
}) => {
    const helperSize = {
        xs: {
            avatarSize: "w-16 h-16",
            fontSize: "text-base",
        },
        sm: {
            avatarSize: "w-20 h-20",
            fontSize: "text-base",
        },
        regular: {
            avatarSize: "w-24 h-24",
            fontSize: "text-base",
        },
        md: {
            avatarSize: "w-28 h-28",
            fontSize: "text-base",
        },
        lg: {
            avatarSize: "w-32 h-32",
            fontSize: "text-lg",
        },
    }[size];

    return (
        <div className={"flex space-x-4 items-center " + className}>
            <img
                className={`rounded-full border border-gray-400 bg-${ring} w-16 h-16 md:w-20 md:h-20`}
                src={avatar?avatar:defaultAvatar}
                alt={`${name}'s avatar`}
            />
            <div>
                <p className={`font-extrabold ${helperSize.fontSize}`}>
                    {name}
                </p>
                <div
                    className={`${helperSize.fontSize}`}
                >
                    {description}
                </div>
            </div>
        </div>
    );
};

export default UserProfileCard;
