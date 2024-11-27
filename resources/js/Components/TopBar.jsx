import { Link } from "@inertiajs/react";

export default function TopBar({ data, className, ...props }) {
    return (
        <div className="flex gap-3 items-start w-full text-xs | lg:text-base |">
            {/* Stats List */}

            {data.map((data, i) => (
                <Link
                    key={i}
                    href={route(data.name)}
                    className={`flex flex-col justify-center items-center gap-4 h-28 rounded flex-1 px-3 py-4 ${
                        route().current(data.name)
                            ? "text-white bg-primary"
                            : "bg-white text-primary"
                    }`}
                >
                    <div>{data.icon}</div>
                    <div className={`flex flex-col space-y-1 ${route().current(data.name)?"text-white":"text-gray-950"}`}>{data.label}</div>
                </Link>
            ))}
        </div>
    );
}
