import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

const HeaderLogo = () => {
    return (
        <div className="hidden lg:flex justify-center">
                <ApplicationLogo className="w-24" />
        </div>
    );
};

export default HeaderLogo;
