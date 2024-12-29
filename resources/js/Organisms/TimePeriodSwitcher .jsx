import Card from "@/Components/Card";

const TimePeriodSwitcher = ({ analytics, className }) => {
    return (
        <div className="flex gap-3 px-4 w-full">
            <Card
                className={`flex-1 text-xs cursor-pointer text-gray-800 px-3 py-2 items-center justify-center ${
                    true ? "bg-gray-800 text-white" : ""
                }`}
            >
                Hari Ini
            </Card>
            <Card
                className={`flex-1 text-xs cursor-pointer text-gray-800 px-3 py-2 items-center justify-center ${
                    false ? "bg-gray-800 text-white" : ""
                }`}
            >
                Bulan Ini
            </Card>
            <Card
                className={`flex-1 text-xs cursor-pointer text-gray-800 px-3 py-2 items-center justify-center ${
                    false ? "bg-gray-800 text-white" : ""
                }`}
            >
                Tahun Ini
            </Card>
        </div>
    );
};

export default TimePeriodSwitcher;
