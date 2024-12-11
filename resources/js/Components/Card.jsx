export default function Card({ className = "", children, ...props }) {
    return (
        <div
            {...props}
            className={`flex flex-col cursor-pointer p-4 shadow-md space-y-2 rounded ${className}`}
        >
            {children}
        </div>
    );
}
