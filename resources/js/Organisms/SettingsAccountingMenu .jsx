import { usePage } from "@inertiajs/react";
import { FaUser } from "react-icons/fa";
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
                href={route("accounting.settings.index")}
            />

            <SidebarItemLink
                label="Keluar"
                icon={IoLogOut}
                onClick={() => Inertia.post(route(`${auth.guard.name}.logout`))}
            />
            <hr />
        </div>
    );
}
