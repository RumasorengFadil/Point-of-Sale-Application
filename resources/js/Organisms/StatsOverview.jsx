import { FaMoneyBill, FaUser } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { BiSolidDrink } from "react-icons/bi";
import StatCard from "@/Components/StatCard/StatCard";

const StatsOverview = ({analytics}) => {
    console.log(analytics);
    const {totalRevenue, totalOrders, mostPopularDrink, mostPopularFood} = analytics;
    return (
        <div className="flex gap-3 items-start w-full text-xs px-4 lg:text-base">
            {/* Stats List */}
            <StatCard
                icon={FaMoneyBill}
                value={totalRevenue.toLocaleString()}
                label="Pendapatan (Rp)"
            />
            <StatCard icon={FaUser} value= {totalOrders.toLocaleString()} label="Total Pesanan" />
            <StatCard
                icon={IoFastFood}
                value={mostPopularFood.product_name}
                label="Terfavorit"
            />
            <StatCard
                icon={BiSolidDrink}
                value={mostPopularDrink.product_name}
                label="Terfavorit"
            />
        </div>
    );
};

export default StatsOverview;
