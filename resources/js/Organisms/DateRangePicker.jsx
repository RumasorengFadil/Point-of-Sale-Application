import DateRangeSelector from "@/Components/DateRangeSelector ";
import PrimaryButton from "@/Components/PrimaryButton";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";

const DateRangeFilter = ({ label }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col space-y-2 px-4">
            <div
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between cursor-pointer"
            >
                <div className="flex space-x-2 items-center">
                    <LuSettings2 size={24} />
                    <p>Filter set data & time</p>
                </div>

                <FaChevronRight
                    className={`transition-all ${open ? "rotate-90" : ""}`}
                    size={20}
                />
            </div>

            <div
                className={`flex flex-col space-y-5 max-w-full shadow-lg rounded-2xl transition-all ${
                    !open ? "h-0 overflow-auto" : "py-3"
                }`}
            >
                <div className="flex items-center justify-between px-6">
                    <h1 className="font-bold">Reset</h1>
                    <IoCloseOutline
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                        size={24}
                    />
                </div>

                <div className="flex flex-row justify-between px-6">
                    <p>Last 90 days</p>
                    <input type="radio" />
                </div>
                <hr />

                <div className="flex flex-col h-full space-y-2 px-6">
                    <div className="flex flex-row justify-between">
                        <p>Choose date</p>
                        <input type="radio" />
                    </div>

                    <DateRangeSelector className="p-0" />
                </div>

                <div className="px-6">
                    <PrimaryButton className="flex bg-primary justify-center w-full">
                        Filter
                    </PrimaryButton>
                </div>
            </div>
            <hr />

            <p className="font-semibold">Laporan, {label}</p>
        </div>
    );
};

export default DateRangeFilter;
