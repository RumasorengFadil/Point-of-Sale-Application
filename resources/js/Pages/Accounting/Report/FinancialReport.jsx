import ApplicationLayout from "@/Layouts/ApplicationLayout";
import HeaderLogo from "@/Organisms/HeaderLogo";
import DateRangeFilter from "@/Organisms/DateRangePicker";
import { Head } from "@inertiajs/react";
import TitleSection from "@/Components/SectionTitle";
import AccountingNavigationMenu from "@/Organisms/AccountingNavigationMenu";
import CashFlowStats from "@/Organisms/CashFlowStats ";
import { Table } from "@/Components/Tabel/Table";
import { TableBody } from "@/Components/TableBody";
import { TableRow } from "@/Components/TableRow";
import { TableHeader } from "@/Components/TableHeader";
import { TableData } from "@/Components/TableData";
import FinancialSummary from "@/Organisms/FinancialSummary";

export default function FinancialReport({
    transactionReport = {},
    analytics = {},
}) {
    const { links } = transactionReport;
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

            <DateRangeFilter
                analytics={analytics}
                routeName="transaction-report.filter"
            />

            <CashFlowStats />

            <FinancialSummary />
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
