import { usePage } from "@inertiajs/react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import SidebarItem from "@/Components/SidebarItem/SidebarItem";
import { IoLogOut } from "react-icons/io5";
import { Inertia } from "@inertiajs/inertia";

export default function POSidebarMenu({}) {
    const { lastRouteName, auth } = usePage().props;

    return (
        <div className="flex flex-col px-4">
            <SidebarItem
                isActive={lastRouteName === "pos-settings"}
                label="Profile Pengguna"
                icon={FaUser}
                href={route("pos-settings.index")}
                isHidden={auth.guard.name !== "cashier"}
            />

            <SidebarItem
                href={route("accounting-dashboard.index")}
                label="Ke Dashboard Accounting"
                icon={FaMoneyBillTrendUp}
                isHidden={auth.guard.name !== "web"}
            />

            <SidebarItem
                label="Keluar"
                icon={IoLogOut}
                onClick={() => Inertia.post(route("cashier.logout"))}
                isHidden={auth.guard.name !== "cashier"}
            />
            <hr />
        </div>
    );
}
