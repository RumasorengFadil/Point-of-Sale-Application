import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import { MdArrowBack } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { ToastContainer } from "react-toastify";
import { memo } from "react";
import { BiSolidDrink } from "react-icons/bi";
import { useTransactionContext } from "@/Context/TransactionContext";
import Product from "@/Components/Product/Product";

export default memo(function ApplicationLayout({
    header,
    content,
    footer,
    sm = "row",
    md = "row",
    lg = "row",
    direction,
}) {
    return (
        <div
            className={`w-full h-screen bg-white flex  gap-4 flex-${direction} lg:bg-gray-100 dark:bg-gray-900 sm: sm:flex-${sm} md:flex-${md} lg:flex-${lg}`}
        >
            {header && (
                <div className="flex bg-red-0">{header}</div>
            )}

            {content && (
                <div className="flex flex-col flex-1 h-full overflow-hidden space-y-8 px-4 pt-8">
                    {content}
                </div>
            )}

            {footer && (
                <div className="flex bg-blue-0">
                    {footer}
                    {/* <div className="w-80 h-80 bg-yellow-500"></div> */}
                </div>
            )}
        </div>
    );
});

