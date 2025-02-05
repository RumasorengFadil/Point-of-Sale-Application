import ApplicationLayout from "@/Layouts/ApplicationLayout";
import NavigationMenu from "@/Organisms/NavigationMenu";
import HeaderLogo from "@/Organisms/HeaderLogo";
import TransactionReportTitle from "@/Organisms/TransactionReportTitle";
import { Head } from "@inertiajs/react";
import StatsOverview from "@/Organisms/StatsOverview";
import TransactionTable from "@/Organisms/TransactionTable";
import Pagination from "@/Components/Pagination";
import MonthRangeFilter from "@/Organisms/MonthRangeFilter";

export default function TransactionReport({ transactionReport, analytics, filterParams }) {
    const {links} = transactionReport;
    const header = (
        <>
            <Head title="Laporan Transaksi" />

            <HeaderLogo />

            <NavigationMenu />
        </>
    );
    const content = (
        <>
            <TransactionReportTitle />

            <MonthRangeFilter
                routeName="transaction-report.filter"
                filterParams = {filterParams}
            />

            <StatsOverview analytics={analytics} />

            <TransactionTable filterParams={filterParams} transactionReport={transactionReport} />

            <Pagination
                links={links}
                params={{
                    startDate: transactionReport.startDate,
                    endDate: transactionReport.endDate,
                    type: transactionReport.type,
                }}
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
