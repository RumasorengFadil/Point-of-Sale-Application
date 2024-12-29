import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import { MdDashboard } from "react-icons/md";
import { BsBoxFill } from "react-icons/bs";
import { RiCursorFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { ToastContainer } from "react-toastify";
import NavigationMenu from "@/Organisms/NavigationMenu";

export default function AuthenticatedLayout({ children }) {
    const { baseRouteName } = usePage().props;

    return (
        <div className="h-screen flex-col-reverse space-y-4 flex sm:justify-center lg:flex-row bg-gray-100 dark:bg-gray-900">
            {/* Toast container to catch notifications globally */}
            <ToastContainer />

            {/* Sidebar */}
            <div className="flex flex-col w-full |lg:static lg:w-36 lg:bg-gray-100 lg:py-4 lg:space-y-4 lg:overflow-auto | bg-white ">
                {/* Logo */}
                <div className="hidden lg:flex justify-center">
                    <Link href="/">
                        <ApplicationLogo className="w-24 fill-current" />
                    </Link>
                </div>

                {/* Sidebar List */}
                <NavigationMenu />
            </div>
            {children}
        </div>
    );
}
