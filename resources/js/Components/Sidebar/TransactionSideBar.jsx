import { useTransactionContext } from "@/Context/TransactionContext";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import { MdArrowBack, MdDashboard } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { memo } from "react";
import { BiSolidDrink } from "react-icons/bi";
import { BsBoxFill } from "react-icons/bs";
import Sidebar from "./Sidebar";
import SidebarNavGroup from "./SidebarNavGroup";

export default memo(function TransactionSideBar({ categories, className }) {
    const links = [
        {
            name: "pos-dashboard.index",
            label: "Dashboard",
            icon: <MdDashboard size={24} />,
        },
        {
            name: "product.index",
            label: "Invetaris",
            icon: <BsBoxFill size={24} />,
        },
    ];

    return (
        <SidebarNavGroup links={links} />
    );
});
