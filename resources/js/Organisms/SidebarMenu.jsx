import { usePage } from "@inertiajs/react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import SidebarItem from "@/Components/SidebarItem/SidebarItem";
import { IoLogOut } from "react-icons/io5";
import { Inertia } from "@inertiajs/inertia";

export default function SidebarMenu({}) {
    const { lastRouteName } = usePage().props;

    return (
        <div className="flex flex-col px-4">
            <SidebarItem
                isActive={lastRouteName === "user-profile"}
                label="Profile Pengguna"
                icon={FaUser}
            />

            <SidebarItem
                label="Ke Dashboard Accounting"
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
