import AccountingNavigationMenu from "@/Organisms/AccountingNavigationMenu";
import AccountingSidebarMenu from "@/Organisms/AccountingSidebarMenu";
import { usePage } from "@inertiajs/react";
import { memo } from "react";
import { ToastContainer } from "react-toastify";

export default memo(function AccountingLayout({
    header,
    content,
    footer,
    direction = "col",
    className = "",
    contentClassName = "",
    footerClassName = "",
    withContainerSpace = true,
    headerClassName,
}) {
    const {user} = usePage().props.auth;

    return (
        <>
            <ToastContainer />
            <div
                className={`w-full h-screen bg-white flex flex-${direction} ${
                    withContainerSpace ? "space-y-8" : ""
                } ${className} lg:space-y-0 lg:bg-gray-100 lg:flex-row`}
            >
                {header && (
                    <div
                        className={`flex flex-col overflow-auto lg:space-y-5 lg:py-4 ${headerClassName}`}
                    >
                        {header}

                        <AccountingSidebarMenu user={user} />

                        <AccountingNavigationMenu user={user} />
                    </div>
                )}

                {content && (
                    <div
                        className={`flex flex-col flex-1 h-full overflow-auto space-y-8 pb-28 lg:py-4 ${contentClassName}`}
                    >
                        {content}
                        
                    </div>
                )}

                {footer && (
                    <div
                        className={`flex flex-col space-y-8 bg-white overflow-auto lg:py-4 ${footerClassName}`}
                    >
                        {footer}
                    </div>
                )}
            </div>
        </>
    );
});
