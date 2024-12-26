const UserProfile = ({
    name,
    description,
    avatar,
    className = "",
    size = "regular",
    ring = "white"
}) => {
    const helperSize = {
        sm: {
            avatarSize: "w-20 h-20",
            fontSize: "text-sm",
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
                className={`rounded-full bg-${ring} p-1 ${helperSize.avatarSize} ${helperSize.avatarSize}`}
                src={avatar}
                alt={`${name}'s avatar`}
            />
            <div>
                <p className={`font-extrabold ${helperSize.fontSize}`}>
                    {name}
                </p>
                <p
                    className={`max-w-28 overflow-hidden ${helperSize.fontSize}`}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};

export default UserProfile;
