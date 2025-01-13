import ApplicationLayout from "@/Layouts/ApplicationLayout";
import HeaderLogo from "@/Organisms/HeaderLogo";
import DateRangeFilter from "@/Organisms/DateRangePicker";
import { Head } from "@inertiajs/react";
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
