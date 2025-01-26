import { Head } from "@inertiajs/react";
import HeaderLogo from "@/Organisms/HeaderLogo";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import InfoBar from "@/Organisms/InfoBar";
import AccountingNavigationMenu from "@/Organisms/AccountingNavigationMenu";
import CashFlowStats from "@/Organisms/CashFlowStats ";
import RecentTransactions from "@/Organisms/RecentTransactions";
import FinancialOverviewSidebar from "@/Organisms/FinancialOverviewSidebar ";
import TimePeriodSwitcher from "@/Organisms/TimePeriodSwitcher ";
import TitleSection from "@/Components/SectionTitle";

export default function Dashboard({financialReport = {},}) {
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

            <RecentTransactions />
        </>
    );

    const footer = (
        <>
            <TitleSection boldText="Overal" subtitle="Statistic" />
            
            <TimePeriodSwitcher />
            
            <FinancialOverviewSidebar />
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
