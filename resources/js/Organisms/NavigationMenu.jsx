import NavItem from "@/Components/NavItem";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";
import { BiSolidReport } from "react-icons/bi";
import { BsBoxFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { RiCursorFill } from "react-icons/ri";

export default function NavigationMenu({ }) {
    const { baseRouteName } = usePage().props;

    return (
        <div className="flex px-6 gap-5 items-center lg:flex-col">
            <NavItem
                href={route("pos-dashboard.index")}
                icon={MdDashboard}
                label="Dashboard"
                isActive={baseRouteName === "pos-dashboard"}
            />

            <NavItem
                href={route("product.index")}
                icon={BsBoxFill}
                label="Invetaris"
                isActive={baseRouteName === "product"}
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
                href={route("transaction-report.index")}
                icon={FaUser}
                label="Akun"
                isActive={baseRouteName === "profile"}
            />

            <NavItem
                onClick={() => Inertia.post(route("logout"))}
                icon={IoLogOut}
                label="Logout"
                className="hidden lg:flex"
            />
        </div>
    );
}
