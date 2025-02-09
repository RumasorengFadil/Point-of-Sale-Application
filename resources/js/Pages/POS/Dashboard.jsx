import { Head } from "@inertiajs/react";
import StatsOverview from "@/Organisms/StatsOverview";
import InfoBar from "@/Organisms/InfoBar";
import OrderSummary from "@/Organisms/OrderSummary ";
import SidebarStatistics from "@/Organisms/SidebarStatistics";
import POSLayout from "@/Layouts/POSLayout";

export default function Dashboard({ analytics, filterParams }) {
    const header = (
        <>
            <Head title="Dashboard" />
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
        <POSLayout
            header={header}
            content={content}
            footer={footer}
            footerClassName="hidden lg:flex"
            direction="col-reverse"
        ></POSLayout>
    );
}
