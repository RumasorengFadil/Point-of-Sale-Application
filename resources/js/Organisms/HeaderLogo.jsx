import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

const HeaderLogo = () => {
    return (
        <div className="hidden lg:flex justify-center">
            <Link href="/">
                <ApplicationLogo className="w-24" />
            </Link>
        </div>
    );
};

export default HeaderLogo;
