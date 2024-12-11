export const EmptyStateMessage = ({ message, icon, className }) => {
    return (
        <div className={`flex flex-col items-center justify-center text-center p-4 ${className}`}>
            {icon && <div className="mb-2">{icon}</div>}
            <p className="text-gray-200">{message}</p>
        </div>
    );
};
