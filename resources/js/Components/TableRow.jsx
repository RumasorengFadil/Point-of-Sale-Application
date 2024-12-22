export const TableRow = ({ children, className }) => {
    return <div className={"flex text-xs space-x-4 border-b " + className}>{children}</div>;
};
