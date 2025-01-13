import CashFlowTable from "@/Components/CashFlowTable/CashFlowTable";
import GrossProfitTable from "@/Components/GrossProfitTable/GrossProfitTable";
import NetProfitTable from "@/Components/NetProfitTable/NetProfitTable";

export default function FinancialSummary({}) {
    return (
        <div className="flex flex-col space-y-8 mx-4 py-4 shadow-md rounded">
            <GrossProfitTable />

            <NetProfitTable />

            <CashFlowTable />
        </div>
    );
}
