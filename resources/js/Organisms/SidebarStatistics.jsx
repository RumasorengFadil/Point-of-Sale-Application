import { IoFastFood } from "react-icons/io5";
import { BiSolidDrink } from "react-icons/bi";
import BarChart from "@/Components/Chart/BarChart";
import getThisWeekMonthYear from "@/utils/getThisWeekMonthYear";
import { useForm } from "@inertiajs/react";
import Card from "@/Components/Card";

const SidebarStatistics = ({ analytics ={}, filterParams={} }) => {
    const { thisMonth, thisYear } = getThisWeekMonthYear();
    const {type} = filterParams;

    const {get} = useForm();

    const fetchFilteredData = (e, params) => {
        e.preventDefault();
        get(route("pos-dashboard.filter", params));
    };

    const filters = [
        {
            label: "Semua",
            params: { startDate: "", endDate: "", type: "default" },
            active: type === "default" || !type,
        },
        {
            label: "Bulan Ini",
            params: {
                startDate: thisMonth.startDate,
                endDate: thisMonth.endDate,
                type: "thisMonth",
            },
            active: type === "thisMonth",
        },
        {
            label: "Tahun Ini",
            params: {
                startDate: thisYear.startDate,
                endDate: thisYear.endDate,
                type: "thisYear",
            },
            active: type === "thisYear",
        },
    ];

    const FilterButton = ({ label, params, active }) => (
        <Card
            onClick={(e) => fetchFilteredData(e, params)}
            className={`flex-1 text-xs cursor-pointer text-gray-800 px-3 py-2 items-center justify-center ${
                active ? "bg-gray-800 text-white" : ""
            }`}
        >
            {label}
        </Card>
    );

    return (
        <div className="flex overflow-auto gap-8 flex-col px-4 items-start w-80 max-h-screen bg-white">
            <div className="flex w-full justify-between">
                <h1>
                    <span className="font-bold">Statistik</span> Keseluruhan
                </h1>
            </div>

            <div className="flex gap-3 w-full">
                {filters.map((filter, index) => (
                    <FilterButton key={index} {...filter} />
                ))}
            </div>

            <div className="flex flex-col gap-8 w-full">
                <div className="flex w-full gap-3">
                    <IoFastFood size={20} />
                    <h1>Makanan</h1>
                </div>
                <BarChart salesSummary={analytics.foodSalesSummary} />
            </div>

            <div className="flex flex-col gap-8 w-full">
                <div className="flex w-full gap-3">
                    <BiSolidDrink size={20} />
                    <h1>Minuman</h1>
                </div>
                <BarChart salesSummary={analytics.drinkSalesSummary} />
            </div>
        </div>
    );
};

export default SidebarStatistics;
