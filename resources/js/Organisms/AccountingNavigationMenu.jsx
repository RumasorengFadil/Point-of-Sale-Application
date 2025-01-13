import NavItem from "@/Components/NavItem";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";
import { BiSolidReport } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { BiSolidBook } from "react-icons/bi";


export default function AccountingNavigationMenu({}) {
    const { baseRouteName, auth, lastRouteName } = usePage().props;
    console.log(lastRouteName);
    return (
        <div className="flex gap-5 items-center lg:px-6 lg:flex-col">
            <NavItem
                href={route("accounting-dashboard.index")}
                icon={MdDashboard}
                label="Dashboard"
                isActive={baseRouteName === "accounting-dashboard"}
                isHidden={auth.guard.name !== "web"}
            />

            <NavItem
                href={route("accounting-journal-entry.index")}
                icon={BiSolidBook}
                label="Buku Kas"
                isActive={baseRouteName === "accounting-journal-entry"}
                isHidden={auth.guard.name !== "web"}
            />


            <NavItem
                href={route("transaction-report.index")}
                icon={BiSolidReport}
                label="Laporan"
                isActive={baseRouteName === "transaction-report"}
            />

            <NavItem
                href={route("accounting.settings.index")}
                icon={IoMdSettings}
                label="Settings"
                isActive={lastRouteName === "settings"}
                isHidden={auth.guard.name !== "web"}
            />

            <NavItem
                onClick={() => Inertia.post(route("logout"))}
                icon={IoLogOut}
                label="Keluar"
                className="hidden lg:flex"
                isHidden={auth.guard.name !== "web"}
            />
        </div>
    );
}
