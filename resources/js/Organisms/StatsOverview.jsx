import { FaMoneyBill, FaUser } from "react-icons/fa";
import Card from "@/Components/Card";
import { IoFastFood } from "react-icons/io5";
import { BiSolidDrink } from "react-icons/bi";
import { IconFigure } from "@/Components/IconFigure";
import StatCard from "@/Components/StatCard/StatCard";

const StatsOverview = () => {
    return (
        <div className="flex gap-3 items-start w-full text-xs px-4 lg:text-base">
            {/* Stats List */}
            <StatCard
                icon={FaMoneyBill}
                value="1.000.000"
                label="Pendapatan (Rp)"
            />
            <StatCard icon={FaUser} value="300" label="Total Pesanan" />
            <StatCard
                icon={IoFastFood}
                value="Ayam Geprek"
                label="Terfavorit"
            />
            <StatCard
                icon={BiSolidDrink}
                value="Es Tea"
                label="Pendapatan (Rp)"
            />
        </div>
    );
};

export default StatsOverview;
