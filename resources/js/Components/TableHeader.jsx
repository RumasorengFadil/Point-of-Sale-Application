
export const TableBody = ({children,className}) => {
    return (
        <div className={"flex text-xs space-x-4 w-full border-b " + className}>
            {children}
        </div>
    );
};
