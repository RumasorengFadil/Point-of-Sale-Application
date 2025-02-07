import { Head } from "@inertiajs/react";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import InfoBar from "@/Organisms/InfoBar";
import AccountingNavigationMenu from "@/Organisms/AccountingNavigationMenu";
import CashFlowStats from "@/Organisms/CashFlowStats ";
import RecentTransactions from "@/Organisms/RecentTransactions";
import FinancialOverviewSidebar from "@/Organisms/FinancialOverviewSidebar ";
import TitleSection from "@/Components/SectionTitle";
import UserAvatar from "@/Components/UserAvatar";
import SidebarMenu from "@/Organisms/SidebarMenu ";

export default function Dashboard({
    financialReport = {},
    journalEntries = {},
}) {
    const header = (
        <>
            <Head title="Dashboard" />

            <SidebarMenu />

            <UserAvatar src="/images/app/3D/image-1.png" />

            <AccountingNavigationMenu />
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
        <ApplicationLayout
            header={header}
            content={content}
            footer={footer}
            footerClassName="hidden lg:flex"
            direction="col-reverse"
        ></ApplicationLayout>
    );
}
