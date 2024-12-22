import ApplicationLayout from "@/Layouts/ApplicationLayout";
import NavigationMenu from "@/Organisms/NavigationMenu";
import HeaderLogo from "@/Organisms/HeaderLogo";
import DateRangeFilter from "@/Organisms/DateRangePicker";
import TransactionReportTitle from "@/Organisms/TransactionReportTitle";
import { Head } from "@inertiajs/react";
import StatsOverview from "@/Organisms/StatsOverview";
import TransactionTable from "@/Organisms/TransactionTable";

export default function Transaction({ transaction, analytics }) {
    const { data, label } = transaction;
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

            <DateRangeFilter label={label} />

            <StatsOverview analytics={analytics} />

            <TransactionTable data={data} />
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
