import { memo } from "react";

export default memo(function ApplicationLayout({
    header,
    content,
    footer,
    direction = "col",
    className="",
    contentClassName="",
    footerClassName="",
}) {
    return (
        <div
            className={`w-full h-screen bg-white space-y-8 flex flex-${direction} lg:space-x-4 lg:space-y-0 ${className} lg:bg-gray-100 dark:bg-gray-900 lg:flex-row`}
        >
            {header && (
                <div className="flex py-4">{header}</div>
            )}

            {content && (
                <div className={`flex flex-col flex-1 h-full overflow-auto py-4 space-y-8 ${contentClassName}`}>
                    {content}
                </div>
            )}

            {footer && (
                <div className={`flex flex-col space-y-8 py-4 bg-white ${footerClassName}`}>
                    {footer}
                    {/* <div className="w-80 h-80 bg-yellow-500"></div> */}
                </div>
            )}
        </div>
    );
});

