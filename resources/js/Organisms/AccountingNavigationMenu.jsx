import NavItem from "@/Components/NavItem";
import { usePage } from "@inertiajs/react";
import { BiSolidReport } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { BiSolidBook } from "react-icons/bi";
import UserAvatarOrganism from "./UserAvatarOrganism";

export default function AccountingNavigationMenu({user={}}) {
    const { baseRouteName, auth, lastRouteName } = usePage().props;

    return (
        <div className="flex gap-5 items-center lg:px-6 lg:flex-col">
            <UserAvatarOrganism user={user} className="w-full" />

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
                href={route("accounting.financial-report.index")}
                icon={BiSolidReport}
                label="Laporan"
                isActive={lastRouteName === "financial-report"}
            />
        </div>
    );
}
