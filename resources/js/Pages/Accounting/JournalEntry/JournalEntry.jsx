import ApplicationLayout from "@/Layouts/ApplicationLayout";
import { Head } from "@inertiajs/react";
import HeaderLogo from "@/Organisms/HeaderLogo";
import AccountingNavigationMenu from "@/Organisms/AccountingNavigationMenu";
import TitleSection from "@/Components/SectionTitle";
import TabulatedCashView from "@/Organisms/TabulatedCashView";
import Pagination from "@/Components/Pagination";
import AccountingActionSection from "@/Organisms/AccountingActionSection";
import MonthRangeFilter from "@/Organisms/MonthRangeFilter";

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

            <AccountingActionSection />

            <MonthRangeFilter
                routeName="accounting-journal-entry.filter"
                filterParams = {filterParams}
            />

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
