import StatCard from "@/Components/StatCard/StatCard";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { GiCash } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";

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
                label="Pendapatan (Rp)"
            />
            <StatCard
                icon={IoMdArrowDropupCircle}
                value={"2.000.000"}
                label="Pengeluaran (Rp)"
            />
            <StatCard
                icon={GiCash}
                value={"2.000.000"}
                label="Laba Bersih (Rp)"
            />
            <StatCard
                icon={MdAccountBalanceWallet}
                value={"2.000.000"}
                label="Saldo Kas (Rp)"
            />
        </div>
    );
};

export default CashFlowStats;
