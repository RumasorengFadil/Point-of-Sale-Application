import ApplicationLayout from "@/Layouts/ApplicationLayout";
import HeaderLogo from "@/Organisms/HeaderLogo";
import DateRangeFilter from "@/Organisms/DateRangePicker";
import { Head } from "@inertiajs/react";
import TitleSection from "@/Components/SectionTitle";
import AccountingNavigationMenu from "@/Organisms/AccountingNavigationMenu";
import CashFlowStats from "@/Organisms/CashFlowStats ";
import FinancialSummary from "@/Organisms/FinancialSummary";
import MonthRangeFilter from "@/Organisms/MonthRangeFilter";

export default function FinancialReport({
    financialReport = {},
    filterParams = {},
}) {
    const header = (
        <>
            <Head title="Laporan Keuangan" />

            <HeaderLogo />

            <AccountingNavigationMenu />
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
        <ApplicationLayout
            header={header}
            content={content}
            contentClassName="bg-white py-4"
            direction="col-reverse"
            withContainerSpace={false}
        ></ApplicationLayout>
    );
}
