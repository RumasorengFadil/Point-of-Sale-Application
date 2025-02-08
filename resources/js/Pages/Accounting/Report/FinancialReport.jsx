import { Head } from "@inertiajs/react";
import TitleSection from "@/Components/SectionTitle";
import CashFlowStats from "@/Organisms/CashFlowStats ";
import FinancialSummary from "@/Organisms/FinancialSummary";
import MonthRangeFilter from "@/Organisms/MonthRangeFilter";
import AccountingLayout from "@/Layouts/AccountingLayout";

export default function FinancialReport({
    financialReport = {},
    filterParams = {},
}) {
    const header = (
        <>
            <Head title="Laporan Keuangan" />
        </>
    );
    const content = (
        <>
            <TitleSection boldText="Laporan" subtitle="Keuangan" />

            <MonthRangeFilter
                filterParams={filterParams}
                routeName="accounting.financial-report.filter"
            />

            <CashFlowStats
                financialReport={financialReport}
                filterParams={filterParams}
            />

            <FinancialSummary
                financialReport={financialReport}
                filterParams={filterParams}
            />
        </>
    );

    return (
        <AccountingLayout
            header={header}
            content={content}
            contentClassName="bg-white py-4"
            direction="col-reverse"
            withContainerSpace={false}
        ></AccountingLayout>
    );
}
