import Card from "@/Components/Card";
import BarChart from "@/Components/Chart/BarChart";
import { GiCash } from "react-icons/gi";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

export default function FinancialOverviewSidebar({}) {
    return (
        <div className="flex overflow-auto gap-8 flex-col py-4 px-4 items-start w-80 max-h-screen bg-white">
            <div className="flex flex-col gap-8 w-full">
                <div className="flex w-full items-center gap-3">
                    <IoMdArrowDropdownCircle size={20} />
                    <h1>Kas Masuk</h1>
                </div>
                <BarChart />
            </div>

            <div className="flex flex-col gap-8 w-full">
                <div className="flex w-full items-center gap-3">
                    <IoMdArrowDropupCircle size={20} />
                    <h1>Kas Keluar</h1>
                </div>
                <BarChart />
            </div>

            <div className="flex flex-col gap-8 w-full">
                <div className="flex w-full items-center gap-3">
                    <GiCash size={20} />
                    <h1>Kas Bersih</h1>
                </div>
                <BarChart />
            </div>
        </div>
    );
}
