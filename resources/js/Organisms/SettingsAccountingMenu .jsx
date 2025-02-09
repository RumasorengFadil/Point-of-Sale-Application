import { usePage } from "@inertiajs/react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import SidebarItem from "@/Components/SidebarItem/SidebarItem";
import { IoLogOut } from "react-icons/io5";
import { Inertia } from "@inertiajs/inertia";
import SidebarItemLink from "@/Components/SidebarItem/SidebarItemLink";

export default function SettingsAccountingMenu ({}) {
    const { lastRouteName, auth } = usePage().props;

    return (
        <div className="flex flex-col px-4">
            <SidebarItemLink
                isActive={lastRouteName === "settings"}
                label="Profile Pengguna"
                icon={FaUser}
                href={route("pos-settings.index")}
            />

            <SidebarItemLink
                label="Keluar"
                icon={IoLogOut}
                onClick={() => Inertia.post(route("logout"))}
            />
            <hr />
        </div>
    );
}
