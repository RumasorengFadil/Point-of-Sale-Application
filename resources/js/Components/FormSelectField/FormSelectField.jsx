import InputError from "../InputError";
import InputLabel from "../InputLabel";

export const FormSelectField = ({
    className,
    children,
    label = "Label",
    error = "",
    ...props
}) => {
    return (
        <div className={"flex flex-col space-y-2 " + className}>
            <InputLabel value={label} />
            <select
                {...props}
                className="text-sm rounded-md shadow-sm p-3 bg-gray-100 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600"
            >
                {children}
            </select>
            <InputError message={error} />
        </div>
    );
};
