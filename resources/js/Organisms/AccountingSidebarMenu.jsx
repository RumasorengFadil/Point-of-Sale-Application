import { usePage } from "@inertiajs/react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import SidebarItem from "@/Components/SidebarItem/SidebarItem";
import { IoLogOut } from "react-icons/io5";
import { Inertia } from "@inertiajs/inertia";

export default function AccountingSidebarMenu({}) {
    const { lastRouteName, auth } = usePage().props;

    return (
        <div className="flex flex-col px-4">
            <SidebarItem
                isActive={lastRouteName === "settings"}
                label="Profile Pengguna"
                icon={FaUser}
                href={route("pos-settings.index")}
            />

            <SidebarItem
                href={route("pos-dashboard.index")}
                label="Ke Dashboard POS (Penjualan)"
                icon={FaMoneyBillTrendUp}
            />

            <SidebarItem
                label="Keluar"
                icon={IoLogOut}
                onClick={() => Inertia.post(route("logout"))}
            />
            <hr />
        </div>
    );
}
