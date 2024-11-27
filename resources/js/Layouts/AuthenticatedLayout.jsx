import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import { MdDashboard } from "react-icons/md";
import { BsBoxFill } from "react-icons/bs";
import { RiCursorFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";
import { IoLogOut } from "react-icons/io5";
import { Inertia } from "@inertiajs/inertia";
import { ToastContainer } from "react-toastify";

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
                <div className="flex flex-row lg:flex-col gap-5 items-center">
                    <Link
                        href={route("pos-dashboard.index")}
                        className={`flex flex-col cursor-pointer w-full | lg:w-20 | h-20 rounded space-y-2 items-center justify-center p-2 ${
                            baseRouteName === "pos-dashboard"
                                ? "bg-primary"
                                : "bg-white"
                        }`}
                    >
                        <div>
                            <MdDashboard
                                className={`${
                                    baseRouteName === "pos-dashboard"
                                        ? "text-white"
                                        : "text-gray-900"
                                }`}
                                size={24}
                            />
                        </div>
                        <p
                            className={`text-xs ${
                                baseRouteName === "pos-dashboard"
                                    ? "text-white"
                                    : "text-gray-900"
                            }`}
                        >
                            Dashboard
                        </p>
                    </Link>
                    <Link 
                        href={route("product.index")}
                        className={`flex flex-col cursor-pointer w-full | lg:w-20 | h-20 rounded space-y-2 items-center justify-center p-2 ${
                            baseRouteName === "product"
                                ? "bg-primary "
                                : "bg-white"
                        }`}
                    >
                        <div>
                            <BsBoxFill
                                className={`${
                                    baseRouteName === "product"
                                        ? "text-white"
                                        : "text-gray-900"
                                }`}
                                size={24}
                            />
                        </div>
                        <p
                            className={`text-xs ${
                                baseRouteName === "product"
                                    ? "text-white"
                                    : "text-gray-900"
                            }`}
                        >
                            Invetaris
                        </p>
                    </Link>
                    <Link
                        href={route("transaction.index")}
                        className={`flex flex-col cursor-pointer w-full | lg:w-20 | h-20 rounded space-y-2 items-center justify-center p-2 ${
                            baseRouteName === "transaction"
                                ? "bg-primary "
                                : "bg-white"
                        }`}
                    >
                        <div>
                            <RiCursorFill
                                className={`${
                                    baseRouteName === "transaction"
                                        ? "text-white"
                                        : "text-gray-900"
                                }`}
                                size={24}
                            />
                        </div>
                        <p
                            className={`text-xs ${
                                baseRouteName === "transaction"
                                    ? "text-white"
                                    : "text-gray-900"
                            }`}
                        >
                            Order
                        </p>
                    </Link>
                    <Link className="flex flex-col cursor-pointer w-full | lg:w-20 | h-20 rounded space-y-2 items-center justify-center p-2 bg-white">
                        <div>
                            <img
                                src="/icons/app/transaction-report.svg"
                                alt=""
                            />
                        </div>
                        <p className="text-gray-900 text-xs">Laporan</p>
                    </Link>
                    <Link className="flex flex-col cursor-pointer w-full | lg:w-20 | h-20 rounded space-y-2 items-center justify-center p-2 bg-white">
                        <div>
                            <FaUser className="text-gray-900" size={24} />
                        </div>
                        <p className="text-gray-900 text-xs">Akun</p>
                    </Link>
                    <Link onClick={()=> {Inertia.post(route('logout'))}} className=" hidden lg:flex flex-col cursor-pointer w-full | lg:w-20 | h-20 rounded space-y-2 items-center justify-center p-2 bg-white">
                        <div>
                            <IoLogOut className="text-gray-900" size={24} />
                        </div>
                        <p className="text-gray-900 text-xs">Keluar</p>
                    </Link>
                </div>
            </div>
            {children}
        </div>
    );
}
