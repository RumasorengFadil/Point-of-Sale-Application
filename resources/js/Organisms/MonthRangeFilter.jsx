import MonthPicker from "@/Components/MonthPicker";
import PrimaryButton from "@/Components/PrimaryButton";
import RadioFilterOption from "@/Components/RadioFilterOption";
import SpinnerWithLabel from "@/Components/SpinnerWithLabel/SpinnerWithLabel";
import withLoading from "@/Components/WithLoading";
import { getMonthDateRange } from "@/utils/getMonthDateRange";
import { getMonthNameByOffset } from "@/utils/getMonthNameByOffset";
import toastUtils from "@/utils/toastUtils";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";

const MonthRangeFilter = ({ routeName, filterParams = {} }) => {
    const [open, setOpen] = useState(false);
    const { get, data, reset, setData, processing } = useForm({
        startDate: filterParams.startDate || "",
        endDate: filterParams.endDate || "",
        type: filterParams.type || "",
    });

    // Submit filter request
    const submitFilter = (e) => {
        e.preventDefault();
        get(route(routeName), {
            onSuccess: (response) => {
                toastUtils.showSuccess(response.props.flash);
                reset();
            },
            onError: (errors) => {
                toastUtils.showError(errors);
            },
        });
    };

    // Update filter data
    const updateFilter = ({ type, startDate = "", endDate = "", month }) => {
        setData((prevData) => ({
            ...prevData,
            type,
            startDate,
            endDate,
            month
        }));
    };
    const ButtonWithLoading = withLoading({ SpinnerWithLabel })(PrimaryButton);

    // Handle filter change events
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        if (name === "thisMonth") {
            const month = getMonthNameByOffset();
            const { startDate, endDate } = getMonthDateRange(month);
            updateFilter({ type: "thisMonth", startDate, endDate, month: month });
        } else if (name === "lastMonth") {
            const month = getMonthNameByOffset(-1);

            const { startDate, endDate } = getMonthDateRange(month);
            updateFilter({
                type: "lastMonth",
                startDate,
                endDate,
                month: month,
            });
        } else if (name === "monthRange") {
            console.log(value);
            const { startDate, endDate } = getMonthDateRange(value);
            updateFilter({
                type: "monthRange",
                startDate,
                endDate,
                month: value,
            });
        }
    };

    return (
        <div className="flex flex-col space-y-2 px-4">
            {/* Toggle filter panel */}
            <div
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between cursor-pointer"
            >
                <div className="flex space-x-2 items-center">
                    <LuSettings2 size={24} />
                    <p>Filter atur data & waktu</p>
                </div>
                <FaChevronRight
                    className={`transition-all ${open ? "rotate-90" : ""}`}
                    size={20}
                />
            </div>

            {/* Filter options */}
            <div
                className={`flex flex-col space-y-5 max-w-full shadow-lg rounded-2xl transition-all ${
                    !open ? "h-0 overflow-auto" : "py-3"
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6">
                    <h1 className="font-bold">Reset</h1>
                    <IoCloseOutline
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                        size={24}
                    />
                </div>

                {/* Filter: All */}
                <RadioFilterOption
                    label="Bulan Ini"
                    onChange={handleFilterChange}
                    name="thisMonth"
                    checked={data.type === "thisMonth"}
                    className="px-6"
                />
                <hr />

                {/* Filter: Today */}
                <RadioFilterOption
                    label="Bulan Kemarin"
                    onChange={handleFilterChange}
                    name="lastMonth"
                    checked={data.type === "lastMonth"}
                    className="px-6"
                />
                <hr />

                {/* Filter: Date Range */}
                <div className="flex flex-col h-full space-y-2 px-6">
                    <MonthPicker
                        label="Pilih Bulan"
                        className="px-0"
                        name="monthRange"
                        onMonthChange={handleFilterChange}
                    />
                </div>

                {/* Submit Button */}
                <div className="px-6">
                    <ButtonWithLoading
                        isLoading={processing}
                        onClick={submitFilter}
                        className="flex bg-primary justify-center w-full"
                    >
                        Filter
                    </ButtonWithLoading>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default MonthRangeFilter;
