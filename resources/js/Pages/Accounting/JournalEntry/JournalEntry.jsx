import ApplicationLayout from "@/Layouts/ApplicationLayout";
import { Head } from "@inertiajs/react";
import HeaderLogo from "@/Organisms/HeaderLogo";
import TitleSection from "@/Components/SectionTitle";
import TabulatedCashView from "@/Organisms/TabulatedCashView";
import Pagination from "@/Components/Pagination";
import AccountingActionSection from "@/Organisms/AccountingActionSection";
import MonthRangeFilter from "@/Organisms/MonthRangeFilter";
import AccountingLayout from "@/Layouts/AccountingLayout";

export default function JournalEntry({ journalEntries, filterParams }) {
    const {data, links} = journalEntries;
    const header = (
        <>
            <Head title="Journal Entry" />
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
        <AccountingLayout
            header={header}
            content={content}
            contentClassName="bg-white py-4"
            direction="col-reverse"
            withContainerSpace = {false}
        ></AccountingLayout>
    );
}
