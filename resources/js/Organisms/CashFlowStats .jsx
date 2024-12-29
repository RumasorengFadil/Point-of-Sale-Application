import StatCard from "@/Components/StatCard/StatCard";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { GiCash } from "react-icons/gi";

const CashFlowStats = ({ analytics, className }) => {
    // const { totalRevenue, totalOrders, mostPopularDrink, mostPopularFood } =
    //     analytics;

    return (
        <div
            className={
                "flex gap-3 items-start w-full text-xs px-4 lg:text-base " + className
            }
        >
            {/* Stats List */}
            <StatCard
                icon={IoMdArrowDropdownCircle}
                value={"1.000.000"}
                label="Kas Masuk (Rp)"
            />
            <StatCard
                icon={IoMdArrowDropupCircle}
                value={"2.000.000"}
                label="Kas Keluar (Rp)"
            />
            <StatCard
                icon={GiCash}
                value={"2.000.000"}
                label="Kas Bersih (Rp)"
            />
        </div>
    );
};

export default CashFlowStats;
