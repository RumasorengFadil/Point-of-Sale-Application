import { memo } from "react";

export default memo(function ApplicationLayout({
    header,
    content,
    footer,
    sm = "row",
    md = "row",
    lg = "row",
    direction = "col",
    className="",
    contentClassName="",
    footerClassName="",
}) {
    return (
        <div
            className={`w-full h-screen bg-white space-y-8 py-4 flex flex-${direction} lg:space-x-4 lg:space-y-0 ${className} lg:bg-gray-100 dark:bg-gray-900 sm:flex-${sm} md:flex-${md} lg:flex-${lg}`}
        >
            {header && (
                <div className="flex">{header}</div>
            )}

            {content && (
                <div className={`flex flex-col flex-1 h-full overflow-hidden space-y-8 ${contentClassName}`}>
                    {content}
                </div>
            )}

            {footer && (
                <div className={`flex flex-col space-y-8 bg-white ${footerClassName}`}>
                    {footer}
                    {/* <div className="w-80 h-80 bg-yellow-500"></div> */}
                </div>
            )}
        </div>
    );
});

