import { memo } from "react";
import { ToastContainer } from "react-toastify";

export default memo(function ApplicationLayout({
    header,
    content,
    footer,
    direction = "col",
    className = "",
    contentClassName = "",
    footerClassName = "",
    layoutPySize = "sm",
}) {
    const layoutPy = {
        none: "py-0",
        sm: "py-4",
        md: "py-6",
        lg: "py-8",
    }[layoutPySize];

    return (
        <>
            <ToastContainer />
            <div
                className={`w-full h-screen bg-white space-y-8 flex flex-${direction} lg:space-y-0 ${className} lg:bg-gray-100 dark:bg-gray-900 lg:flex-row`}
            >
                {header && (
                    <div
                        className={`flex flex-col overflow-auto space-y-5 lg:py-4`}
                    >
                        {header}
                    </div>
                )}

                {content && (
                    <div
                        className={`flex flex-col flex-1 h-full overflow-auto space-y-8 lg:py-4 ${contentClassName}`}
                    >
                        {content}
                    </div>
                )}

                {footer && (
                    <div
                        className={`flex flex-col space-y-8 bg-white lg:py-4 ${footerClassName}`}
                    >
                        {footer}
                        {/* <div className="w-80 h-80 bg-yellow-500"></div> */}
                    </div>
                )}
            </div>
        </>
    );
});
