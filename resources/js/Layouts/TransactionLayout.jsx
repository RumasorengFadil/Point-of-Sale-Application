import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import { MdArrowBack } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { ToastContainer } from "react-toastify";
import { memo } from "react";
import { BiSolidDrink } from "react-icons/bi";
import { useTransactionContext } from "@/Context/TransactionContext";

export default memo(function TransactionLayout({ children, categories }) {
    const { baseRouteName } = usePage().props;
    const { category, setCategory } = useTransactionContext();
    return (
        <div className="h-screen flex bg-white | sm:justify-center sm:pt-0 lg:flex-row lg:bg-gray-100 | dark:bg-gray-900">
            {/* Toast container to catch notifications globally */}
            <ToastContainer />

            
            {children}
        </div>
    );
});
