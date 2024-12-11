import { Link, usePage } from "@inertiajs/react";
import BackBtn from "../BackBtn";
import ApplicationLogo from "../ApplicationLogoSm";

export default function Sidebar({
    className = "",
    links,
    children,
    backBtn = false,
    title = "Kembali",
    ...props
}) {
    return (
        <div className="flex flex-col w-full bg-white py-4 space-y-4 | lg:static lg:w-36 lg:bg-gray-100 lg:overflow-auto |">
            {backBtn && (
                <BackBtn
                    onClick={() => window.history.back()}
                    className="px-4"
                    title={title}
                />
            )}

            {/* Logo */}
            <div className="hidden lg:flex justify-center">
                <Link href="/">
                    <ApplicationLogo className="w-24 fill-current" />
                </Link>
            </div>

            {/* Sidebar List */}
            {children}
        </div>
    );
}
