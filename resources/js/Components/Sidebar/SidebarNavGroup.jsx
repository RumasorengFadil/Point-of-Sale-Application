import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "../ApplicationLogoSm";
import { MdDashboard } from "react-icons/md";
import { BsBoxFill } from "react-icons/bs";
import { RiCursorFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

export default function SidebarNavGroup({ links }) {
    const { baseRouteName } = usePage().props;

    return (
        <div className="flex flex-row lg:flex-col gap-5 items-center">
            {links.map((link) => (
                <Link
                    href={route(link.name)}
                    className={`flex flex-col cursor-pointer w-full | lg:w-20 | h-20 rounded space-y-2 items-center justify-center p-2 ${
                        baseRouteName === "pos-dashboard"
                            ? "bg-primary"
                            : "bg-white"
                    }`}
                >
                    <div
                        className={`${
                            baseRouteName === "pos-dashboard"
                                ? "text-white"
                                : "text-gray-900"
                        }`}
                    >
                        {link.icon}
                    </div>
                    <p
                        className={`text-xs ${
                            baseRouteName === "pos-dashboard"
                                ? "text-white"
                                : "text-gray-900"
                        }`}
                    >
                        {link.label}
                    </p>
                </Link>
            ))}
        </div>
    );
}
