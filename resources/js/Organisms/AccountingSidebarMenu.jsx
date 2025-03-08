import Overlay from "@/Components/Overlay";
import SidebarItem from "@/Components/SidebarItem/SidebarItem";
import SidebarItemLink from "@/Components/SidebarItem/SidebarItemLink";
import UserProfileCard from "@/Components/UserProfileCard";
import useSidebarStore from "@/store/useSidebarStore";
import { Inertia } from "@inertiajs/inertia";
import { HiSwitchHorizontal } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { IoCloseOutline, IoLogOut } from "react-icons/io5";

const AccountingSidebarMenu = ({ user }) => {
    const showCart = useSidebarStore((state) => state.showSidebar);
    const setShowSidebar = useSidebarStore((state) => state.setShowSidebar);

    return (
        <div>
            <div
                className={`flex z-50 flex-col space-y-4 bg-white h-full fixed top-0 py-4 shadow-lg rounded-r-xl transition-all ${
                    !showCart ? "-translate-x-full" : ""
                }`}
            >
                {/* Header Sidebar */}
                <div className="flex items-center justify-between px-4 space-x-16">
                    <UserProfileCard
                        size="sm"
                        name={user.real_name}
                        description={user.username}
                        avatar={`${
                            user.image &&
                            `/storage/uploads/user/img/${user.image}`
                        }`}
                    />
                    <IoCloseOutline
                        onClick={() => setShowSidebar(!showCart)}
                        className="cursor-pointer"
                        size={24}
                    />
                </div>

                {/* Menu Sidebar */}
                <div className="flex flex-col px-4">
                    <div className="flex flex-col py-1">
                        <SidebarItemLink
                            label="Pembukuan"
                            icon={HiSwitchHorizontal}
                            href={route("pos-dashboard.index")}
                            className="hover:bg-gray-300 transition-all rounded-md px-2"
                            bar={false}
                        />
                    </div>
                    <hr />
                    <div className="flex flex-col py-1">
                        <SidebarItemLink
                            label="Pengaturan"
                            icon={IoMdSettings}
                            href={route("accounting.settings.index")}
                            className="hover:bg-gray-300 transition-all rounded-md px-2"
                            bar={false}
                        />
                    </div>
                    <hr />
                    <div className="flex flex-col py-1">
                        <SidebarItem
                            label="Keluar"
                            icon={IoLogOut}
                            onClick={() => Inertia.post(route("web.logout"))}
                            className="hover:bg-gray-300 transition-all rounded-md px-2"
                            bar={false}
                        />
                    </div>
                </div>
            </div>

            <Overlay
                onClick={() => setShowSidebar(!showCart)}
                overlay={showCart}
                clear={false}
            />
        </div>
    );
};

export default AccountingSidebarMenu;
