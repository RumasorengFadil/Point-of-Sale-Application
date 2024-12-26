import DateRangeSelector from "@/Components/DateRangeSelector ";
import PrimaryButton from "@/Components/PrimaryButton";
import SpinnerWithLabel from "@/Components/SpinnerWithLabel/SpinnerWithLabel";
import withLoading from "@/Components/WithLoading";
import { getPastDateRange } from "@/utils/getPastDateRange";
import toastUtils from "@/utils/toastUtils";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";

const DateRangeFilter = ({ analytics }) => {
    const [open, setOpen] = useState(false);
    const { get, data, reset, setData, processing } = useForm({
        startDate: "",
        endDate: "",
        type: analytics.type,
    });

    // Submit filter request
    const submitFilter = (e) => {
        e.preventDefault();
        get(route("transaction-report.filter"), {
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
    const updateFilter = ({ type, startDate = "", endDate = "" }) => {
        setData((prevData) => ({
            ...prevData,
            type,
            startDate,
            endDate,
        }));
    };
    const ButtonWithLoading = withLoading({ SpinnerWithLabel })(PrimaryButton);

    // Handle filter change events
    const handleFilterChange = (e) => {
        const { name } = e.target;
        if (name === "default") {
            updateFilter({ type: "default" });
        } else if (name === "today") {
            const { endDate } = getPastDateRange(0);
            updateFilter({ type: "today", startDate: endDate, endDate });
        } else if (name === "lastNinetyDays") {
            const { startDate, endDate } = getPastDateRange(90);
            updateFilter({ type: "lastNinetyDays", startDate, endDate });
        } else if (name === "dateRange") {
            updateFilter({ type: "dateRange" });
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
                <div className="flex flex-row justify-between px-6">
                    <p>Semua</p>
                    <input
                        onChange={handleFilterChange}
                        name="default"
                        checked={data.type === "default"}
                        type="radio"
                    />
                </div>
                <hr />
                {/* Filter: All */}
                <div className="flex flex-row justify-between px-6">
                    <p>Hari Ini</p>
                    <input
                        onChange={handleFilterChange}
                        name="today"
                        checked={data.type === "today"}
                        type="radio"
                    />
                </div>
                <hr />

                {/* Filter: Last 90 Days */}
                <div className="flex flex-row justify-between px-6">
                    <p>90 hari terakhir</p>
                    <input
                        onChange={handleFilterChange}
                        name="lastNinetyDays"
                        checked={data.type === "lastNinetyDays"}
                        type="radio"
                    />
                </div>
                <hr />

                {/* Filter: Date Range */}
                <div className="flex flex-col h-full space-y-2 px-6">
                    <div className="flex flex-row justify-between">
                        <p>Pilih Tanggal</p>
                        <input
                            onChange={handleFilterChange}
                            name="dateRange"
                            checked={data.type === "dateRange"}
                            type="radio"
                        />
                    </div>

                    <DateRangeSelector
                        onStartDateChange={(date) =>
                            updateFilter({
                                type: "dateRange",
                                startDate: date,
                                endDate: data.endDate,
                            })
                        }
                        onEndDateChange={(date) =>
                            updateFilter({
                                type: "dateRange",
                                startDate: data.startDate,
                                endDate: date,
                            })
                        }
                        startDate={data.startDate}
                        endDate={data.endDate}
                        className="p-0"
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

            {/* Footer */}
            <hr />

            {analytics.type !== "default" ? (
                <p className="font-semibold">
                    Laporan, {analytics.startDate} sampai {analytics.endDate}
                </p>
            ) : (
                <p className="font-semibold">Laporan, Semua</p>
            )}
        </div>
    );
};

export default DateRangeFilter;
