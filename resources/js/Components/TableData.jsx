
export const TableData = ({children, className}) => {
    return (
        <div className={"flex text-xs w-full h-max py-4 " + className}>
            {children}
        </div>
    );
};
