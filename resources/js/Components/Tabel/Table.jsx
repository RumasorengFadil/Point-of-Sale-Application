import { TableHeader } from "../TableBody";
import { TableData } from "../TableData";
import { TableBody } from "../TableHeader";

export const Table = ({ className = "", children }) => {
    return (
        <div className={"flex flex-col " + className}>
            {children}
        </div>
    );
};

// ${open ? "sm:visible sm:opacity-100 translate-y-0 sm:translate-y-full" : "hidden sm:translate-y-3/4 sm:opacity-0 sm:invisible
