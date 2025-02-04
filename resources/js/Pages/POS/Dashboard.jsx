import { Head } from "@inertiajs/react";
import StatsOverview from "@/Organisms/StatsOverview";
import HeaderLogo from "@/Organisms/HeaderLogo";
import NavigationMenu from "@/Organisms/NavigationMenu";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import InfoBar from "@/Organisms/InfoBar";
import OrderSummary from "@/Organisms/OrderSummary ";
import SidebarStatistics from "@/Organisms/SidebarStatistics";

export default function Dashboard({ analytics, filterParams }) {
    const header = (
        <>
            <Head title="Laporan Transaksi" />

            <HeaderLogo />

            <NavigationMenu />
        </>
    );
    const content = (
        <>
            <InfoBar />

            <StatsOverview analytics={analytics} />

            <OrderSummary analytics={analytics} />
        </>
    );

    const footer = (
        <>
            <SidebarStatistics
                analytics={analytics}
                filterParams={filterParams}
            />
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
