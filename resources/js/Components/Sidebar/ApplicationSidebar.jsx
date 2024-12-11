import { BsBoxFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import Sidebar from "./Sidebar";
import { RiCursorFill } from "react-icons/ri";
import { BiSolidReport } from "react-icons/bi";
import SidebarNavGroup from "./SidebarNavGroup";

export default function ApplicationSidebar({ }) {
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
        {
            name: "transaction.index",
            label: "Order",
            icon: <RiCursorFill size={24} />,
        },
        {
            name: "transaction.index",
            label: "Laporan",
            icon: <BiSolidReport size={24} />,
        },
        {
            name: "logout",
            label: "Keluar",
            icon: <IoLogOut size={24} />,
        },
    ];

    return (
        <SidebarNavGroup links={links} />
    );
}
