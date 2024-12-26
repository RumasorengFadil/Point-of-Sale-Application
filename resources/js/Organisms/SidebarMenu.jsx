import { usePage } from "@inertiajs/react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import SidebarItem from "@/Components/SidebarItem/SidebarItem";

export default function SidebarMenu({}) {
    const { lastRouteName } = usePage().props;

    return (
        <div className="flex flex-col px-4">
            <SidebarItem isActive={lastRouteName === "user-accounts"} label="Profile Pengguna" icon={FaUser} />

            <SidebarItem
                label="Ke Dashboard Accounting"
                icon={FaMoneyBillTrendUp}
            />
            <hr />
        </div>
    );
}
