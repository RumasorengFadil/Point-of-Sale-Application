import { Head } from "@inertiajs/react";
import HeaderLogo from "@/Organisms/HeaderLogo";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import InfoBar from "@/Organisms/InfoBar";
import AccountingNavigationMenu from "@/Organisms/AccountingNavigationMenu";
import CashFlowStats from "@/Organisms/CashFlowStats ";
import RecentTransactions from "@/Organisms/RecentTransactions";
import FinancialOverviewSidebar from "@/Organisms/FinancialOverviewSidebar ";
import TitleSection from "@/Components/SectionTitle";

export default function Dashboard({financialReport = {}, journalEntries = {}}) {
    const header = (
        <>
            <Head title="Laporan Transaksi" />

            <HeaderLogo />

            <AccountingNavigationMenu />
        </>
    );
    const content = (
        <>
            <InfoBar />

            <CashFlowStats financialReport={financialReport} />

            <RecentTransactions journalEntries = {journalEntries} />
        </>
    );

    const footer = (
        <>
            <TitleSection boldText="Overal" subtitle="Statistic" />
            
            <FinancialOverviewSidebar financialReport={financialReport} />
        </>
    );
    return (
        <ApplicationLayout
            header={header}
            content={content}
            footer={footer}
            footerClassName="hidden lg:flex"
            direction="col-reverse"
        ></ApplicationLayout>
    );
}
