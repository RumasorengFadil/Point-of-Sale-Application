import TransactionReportTitle from "@/Organisms/TransactionReportTitle";
import { Head } from "@inertiajs/react";
import StatsOverview from "@/Organisms/StatsOverview";
import TransactionTable from "@/Organisms/TransactionTable";
import Pagination from "@/Components/Pagination";
import MonthRangeFilter from "@/Organisms/MonthRangeFilter";
import POSLayout from "@/Layouts/POSLayout";

export default function TransactionReport({
    transactionReport,
    analytics,
    filterParams,
}) {
    const { links } = transactionReport;
    const header = (
        <>
            <Head title="Laporan Transaksi" />
        </>
    );
    const content = (
        <>
            <TransactionReportTitle />

            <MonthRangeFilter
                routeName="transaction-report.filter"
                filterParams={filterParams}
            />

            <StatsOverview analytics={analytics} />

            <TransactionTable
                filterParams={filterParams}
                transactionReport={transactionReport}
            />

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
        <POSLayout
            header={header}
            content={content}
            contentClassName="bg-white"
            direction="col-reverse"
        ></POSLayout>
    );
}
