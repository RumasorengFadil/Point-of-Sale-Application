import StatCard from "@/Components/StatCard/StatCard";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { GiCash } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";

const CashFlowStats = ({ financialReport={}, className }) => {
    const { cashReport, incomeReport } = financialReport;
    
    return (
        <div
            className={
                "flex gap-3 items-start w-full text-xs px-4 lg:text-base " +
                className
            }
        >
            {/* Stats List */}
            <StatCard
                icon={IoMdArrowDropdownCircle}
                value={formatNumberWithDots(incomeReport.totalIncome)}
                label="Pendapatan (Rp)"
            />
            <StatCard
                icon={IoMdArrowDropupCircle}
                value={formatNumberWithDots(incomeReport.totalExpenses)}
                label="Pengeluaran (Rp)"
            />
            <StatCard
                icon={GiCash}
                value={formatNumberWithDots(incomeReport.netIncome)}
                label="Pendapatan Bersih (Rp)"
            />
            <StatCard
                icon={MdAccountBalanceWallet}
                value={formatNumberWithDots(cashReport.finalCashBalance)}
                label="Saldo Kas (Rp)"
            />
        </div>
    );
};

export default CashFlowStats;
