import { Head } from "@inertiajs/react";
import InfoBar from "@/Organisms/InfoBar";
import CashFlowStats from "@/Organisms/CashFlowStats ";
import RecentTransactions from "@/Organisms/RecentTransactions";
import FinancialOverviewSidebar from "@/Organisms/FinancialOverviewSidebar ";
import TitleSection from "@/Components/SectionTitle";
import AccountingLayout from "@/Layouts/AccountingLayout";

export default function Dashboard({
    financialReport = {},
    journalEntries = {},
}) {
    const header = (
        <>
            <Head title="Dashboard" />
        </>
    );
    const content = (
        <>
            <InfoBar />

            <CashFlowStats financialReport={financialReport} />

            <RecentTransactions journalEntries={journalEntries} />
        </>
    );

    const footer = (
        <>
            <TitleSection boldText="Overal" subtitle="Statistic" />

            <FinancialOverviewSidebar financialReport={financialReport} />
        </>
    );
    return (
        <AccountingLayout
            header={header}
            content={content}
            footer={footer}
            footerClassName="hidden lg:flex"
            direction="col-reverse"
        ></AccountingLayout>
    );
}
