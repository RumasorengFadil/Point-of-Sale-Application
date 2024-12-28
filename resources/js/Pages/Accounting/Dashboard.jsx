import { Head } from "@inertiajs/react";
import HeaderLogo from "@/Organisms/HeaderLogo";
import NavigationMenu from "@/Organisms/NavigationMenu";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import InfoBar from "@/Organisms/InfoBar";
import AccountingNavigationMenu from "@/Organisms/AccountingNavigationMenu";

export default function Dashboard({  }) {
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

            {/* <StatsOverview analytics={analytics} /> */}

        </>
    );

    const footer = (
        <>
           {/* <SidebarStatistics analytics={analytics}  /> */}
        </>
    );
    return (
        <ApplicationLayout
            header={header}
            content={content}
            footer = {footer}
            footerClassName = "hidden lg:flex"
            direction="col-reverse"
        ></ApplicationLayout>
    );
}
