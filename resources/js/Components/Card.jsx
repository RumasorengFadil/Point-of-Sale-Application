export default function Card({ className = "", children, cursor = "pointer", ...props }) {
    return (
        <div
            {...props}
            className={`flex flex-col cursor-${cursor} p-4 shadow-md space-y-2 rounded ${className}`}
        >
            {children}
        </div>
    );
}
