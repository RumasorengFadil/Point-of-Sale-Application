import NavItem from "@/Components/NavItem";
import { usePage } from "@inertiajs/react";
import { BiSolidReport } from "react-icons/bi";
import { BsBoxFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { RiCursorFill } from "react-icons/ri";
import UserAvatarOrganism from "./UserAvatarOrganism";

export default function NavigationMenu({}) {
    const { baseRouteName, auth } = usePage().props;
    
    return (
        <div className="flex gap-5 items-center fixed bottom-0 bg-white w-full lg:bg-gray-100 lg:static lg:px-6 lg:flex-col">
            <UserAvatarOrganism className="w-full" />

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
        </div>
    );
}
