import ApplicationLayout from "@/Layouts/ApplicationLayout";
import { Head } from "@inertiajs/react";
import HeaderLogo from "@/Organisms/HeaderLogo";
import AccountingNavigationMenu from "@/Organisms/AccountingNavigationMenu";
import TitleSection from "@/Components/SectionTitle";
import ActionCardSection from "@/Organisms/ActionCardSection";
import DateRangeFilter from "@/Organisms/DateRangePicker";
import TabulatedCashView from "@/Organisms/TabulatedCashView";
import Pagination from "@/Components/Pagination";

export default function JournalEntry({ journalEntries, filterParams }) {
    const {data, links} = journalEntries;
    const header = (
        <>
            <Head title="Journal Entry" />

            <HeaderLogo />

            <AccountingNavigationMenu />
        </>
    );

    const content = (
        <>
            <TitleSection boldText="Buku" subtitle="Kas" />

            <ActionCardSection />

            <DateRangeFilter filterParams = {filterParams} routeName={"accounting-journal-entry.filter"} analytics={{}} />

            <TabulatedCashView journalEntries={data} />

            <Pagination
                links={links}
                params={filterParams}
            />
        </>
    );

    return (
        <ApplicationLayout
            header={header}
            content={content}
            contentClassName="bg-white py-4"
            direction="col-reverse"
            withContainerSpace = {false}
        ></ApplicationLayout>
    );
}
