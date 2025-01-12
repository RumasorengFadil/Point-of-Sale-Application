import ApplicationLayout from "@/Layouts/ApplicationLayout";
import NavigationMenu from "@/Organisms/NavigationMenu";
import HeaderLogo from "@/Organisms/HeaderLogo";
import DateRangeFilter from "@/Organisms/DateRangePicker";
import TransactionReportTitle from "@/Organisms/TransactionReportTitle";
import { Head } from "@inertiajs/react";
import StatsOverview from "@/Organisms/StatsOverview";
import TransactionTable from "@/Organisms/TransactionTable";
import Pagination from "@/Components/Pagination";

export default function Transaction({ transactionReport, analytics, filterParams }) {
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

            <DateRangeFilter
                analytics={analytics}
                routeName="transaction-report.filter"
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
