import React from "react";
import { MdCalendarMonth } from "react-icons/md";

const DateRangeSelector = ({
    startDate,
    endDate,
    onStartDateChange,
    onEndDateChange,
    className,
}) => {
    const handlePickerClick = (e) => {
        e.target.showPicker();
        e.target.focus();
    };

    return (
        <div className={"flex space-x-1 items-center p-2 " + className}>
            {/* Start Date */}
            <div className="flex-1 relative hover:bg-gray-200">
                <label className="flex items-center justify-between cursor-pointer text-gray-700">
                    <p>{startDate || "Start Date"}</p>
                    <MdCalendarMonth className="cursor-pointer" size={16} />
                </label>
                <input
                    type="date"
                    name="startDate"
                    value={startDate}
                    onClick={handlePickerClick}
                    onChange={(e) => onStartDateChange(e.target.value)}
                    className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer"
                />
            </div>
            <div>|</div>
            {/* End Date */}
            <div className="flex-1 relative hover:bg-gray-200">
                <label
                    htmlFor="endDate"
                    className="flex items-center justify-between cursor-pointer text-gray-700"
                >
                    <p>{endDate || "End Date"}</p>
                    <MdCalendarMonth className="cursor-pointer" size={16} />
                </label>
                <input
                    id="endDate"
                    type="date"
                    name="endDate"
                    value={endDate}
                    onClick={handlePickerClick}
                    onChange={(e) => onEndDateChange(e.target.value)}
                    className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer"
                />
            </div>
        </div>
    );
};

export default DateRangeSelector;
