export const TableHeader = ({ children, className }) => {
    return (
        <div className={"flex text-xs space-x-4 font-bold border-b-2 border-black " + className}>
            {children}
        </div>
    );
};
