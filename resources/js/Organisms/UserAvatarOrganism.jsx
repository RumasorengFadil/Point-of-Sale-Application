import UserAvatar from "@/Components/UserAvatar";
import useSidebarStore from "@/store/useSidebarStore";
import React from "react";

const UserAvatarOrganism = ({className, src}) => {
    const setShowSidebar = useSidebarStore((state) => state.setShowSidebar);
    const showCart = useSidebarStore((state) => state.showSidebar);

    return <UserAvatar className={className} onClick = {()=> setShowSidebar(!showCart)} src="/images/app/3D/image-1.png" />
};

export default UserAvatarOrganism;
