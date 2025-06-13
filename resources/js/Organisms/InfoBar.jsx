import getCurrentDateTime from "@/utils/getCurrentDateTime";
import { Link } from "@inertiajs/react";
import React from "react";

const InfoBar = ({}) => {
    const { date, day, time } = getCurrentDateTime();

    return (
        <div className="flex justify-between items-center px-4 h-max w-full">
            <div className="flex items-center py-2 w-max space-x-4">
                <img className="w-12 h-12" src="/images/app/logo.png" alt="" />
                <p>
                    <span className="font-bold">{date}</span> {day} | {time}
                </p>
            </div>
            <Link href={route("transaction.index")} className="cursor-pointer">
                <img src="/icons/app/menu.svg" alt="Menu Icon" />
            </Link>
        </div>
    );
};

export default InfoBar;
