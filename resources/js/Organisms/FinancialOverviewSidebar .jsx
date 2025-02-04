import LineChart from "@/Components/Chart/LineChart";
import { GiCash } from "react-icons/gi";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

export default function FinancialOverviewSidebar({financialReport}) {
    const {incomeReport} = financialReport;

    const {incomeSummary, expensesSummary, netIncomeSummary} = incomeReport;

    return (
        <div className="flex overflow-auto gap-8 flex-col py-4 px-4 items-start w-80 max-h-screen bg-white">
            <div className="flex flex-col gap-8 w-full">
                <div className="flex w-full items-center gap-3">
                    <IoMdArrowDropdownCircle size={20} />
                    <h1>Pendapatan</h1>
                </div>
                <LineChart summary={incomeSummary} />
            </div>

            <div className="flex flex-col gap-8 w-full">
                <div className="flex w-full items-center gap-3">
                    <IoMdArrowDropupCircle size={20} />
                    <h1>Pengeluaran</h1>
                </div>
                <LineChart summary={expensesSummary} />
            </div>

            <div className="flex flex-col gap-8 w-full">
                <div className="flex w-full items-center gap-3">
                    <GiCash size={20} />
                    <h1>Pendapatan Bersih</h1>
                </div>
                <LineChart summary={netIncomeSummary} />
            </div>
        </div>
    );
}
