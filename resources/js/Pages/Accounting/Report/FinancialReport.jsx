import ApplicationLayout from "@/Layouts/ApplicationLayout";
import NavigationMenu from "@/Organisms/NavigationMenu";
import HeaderLogo from "@/Organisms/HeaderLogo";
import DateRangeFilter from "@/Organisms/DateRangePicker";
import TransactionReportTitle from "@/Organisms/TransactionReportTitle";
import { Head } from "@inertiajs/react";
import StatsOverview from "@/Organisms/StatsOverview";
import TransactionTable from "@/Organisms/TransactionTable";
import Pagination from "@/Components/Pagination";
import TitleSection from "@/Components/SectionTitle";
import AccountingNavigationMenu from "@/Organisms/AccountingNavigationMenu";

export default function FinancialReport({
    transactionReport,
    analytics,
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
        </>
    );

    return (
        <ApplicationLayout
            header={header}
            content={content}
            contentClassName="bg-white"
            direction="col-reverse"
        ></ApplicationLayout>
    );
}
