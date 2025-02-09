import UserAvatar from "@/Components/UserAvatar";
import useSidebarStore from "@/store/useSidebarStore";
import { usePage } from "@inertiajs/react";
import React from "react";

const UserAvatarOrganism = ({ className }) => {
    const setShowSidebar = useSidebarStore((state) => state.setShowSidebar);
    const showCart = useSidebarStore((state) => state.showSidebar);
    const {user} = usePage().props.auth;

    return (
        <UserAvatar
            className={className}
            onClick={() => setShowSidebar(!showCart)}
            avatar={`${
                user.image &&
                `/storage/uploads/user/img/${user.image}`
            }`}
        />
    );
};

export default UserAvatarOrganism;
