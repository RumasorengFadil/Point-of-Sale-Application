import NavItem from "@/Components/NavItem";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";
import { BiSolidReport } from "react-icons/bi";
import { BsBoxFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { RiCursorFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";

export default function NavigationMenu({}) {
    const { baseRouteName, auth } = usePage().props;
    
    return (
        <div className="flex gap-5 items-center lg:px-6 lg:flex-col">
            <NavItem
                href={route("pos-dashboard.index")}
                icon={MdDashboard}
                label="Dashboard"
                isActive={baseRouteName === "pos-dashboard"}
                isHidden={auth.guard.name !== "web"}
            />

            <NavItem
                href={route("product.index")}
                icon={BsBoxFill}
                label="Invetaris"
                isActive={baseRouteName === "product"}
                isHidden={auth.guard.name !== "web"}
            />

            <NavItem
                href={route("transaction.index")}
                icon={RiCursorFill}
                label="Order"
                isActive={baseRouteName === "transaction"}
            />

            <NavItem
                href={route("transaction-report.index")}
                icon={BiSolidReport}
                label="Laporan"
                isActive={baseRouteName === "transaction-report"}
            />

            <NavItem
                href={route("settings.user-profile.index")}
                icon={IoMdSettings}
                label="Settings"
                isActive={baseRouteName === "settings"}
                isHidden={auth.guard.name !== "web"}
            />
            
            <NavItem
                href={route("settings.user-profile.index")}
                icon={IoMdSettings}
                label="Settings"
                isActive={baseRouteName === "settings"}
                isHidden={auth.guard.name !== "cashier"}
            />

            <NavItem
                onClick={() => Inertia.post(route("logout"))}
                icon={IoLogOut}
                label="Keluar"
                className="hidden lg:flex"
                isHidden={auth.guard.name !== "web"}
            />

            <NavItem
                onClick={() => Inertia.post(route("cashier.logout"))}
                icon={IoLogOut}
                label="Keluar"
                className="hidden lg:flex"
                isHidden={auth.guard.name !== "cashier"}
            />

        </div>
    );
}
