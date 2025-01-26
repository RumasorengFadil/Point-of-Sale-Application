import React from 'react';
import { MdCalendarMonth } from 'react-icons/md';

const MonthPicker = ({ label = "Select Month", onMonthChange, className, name }) => {
    const handlePickerClick = (e) => {
        e.stopPropagation(); // Mencegah event bubbling yang tidak diinginkan
        e.target.showPicker();
        e.target.focus();
    };


    return (
        <div
            className={"relative p-2 cursor-pointer hover:bg-gray-200 " + className}
            onClick={handlePickerClick}
        >
            <label
                htmlFor="month"
                className="flex items-center justify-between cursor-pointer"
            >
                <p>{label}</p>
                <MdCalendarMonth className="cursor-pointer" size={16} />
            </label>
            <input
                id="month"
                type="month"
                name={name}
                onChange={onMonthChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
        </div>
    );
};

export default MonthPicker;
