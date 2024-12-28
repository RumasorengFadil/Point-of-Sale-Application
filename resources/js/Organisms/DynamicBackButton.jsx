import BackBtn from "@/Components/BackBtn";
import { Link } from "@inertiajs/react";

const DynamicBackButton = ({ auth, className = "" }) => {
    return (
        <>
            {auth.guard.name === "web" ? (
                <Link href={route("pos-dashboard.index")} className={className}>
                    <BackBtn className="px-4" />
                </Link>
            ) : (
                <Link
                    href={route("transaction-report.index")}
                    className={className}
                >
                    <BackBtn className="px-4" />
                </Link>
            )}
        </>
    );
};

export default DynamicBackButton;
