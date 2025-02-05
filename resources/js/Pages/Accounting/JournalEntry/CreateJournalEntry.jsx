import ApplicationLayout from "@/Layouts/ApplicationLayout";
import { Head } from "@inertiajs/react";
import HeaderLogo from "@/Organisms/HeaderLogo";
import AccountingNavigationMenu from "@/Organisms/AccountingNavigationMenu";
import TitleSection from "@/Components/SectionTitle";
import AddCashTransactionForm from "@/Organisms/AddCashTransactionForm ";
import AccountingActionSection from "@/Organisms/AccountingActionSection";

export default function CreateJournalEntry({ masterData }) {
    const { journalCategories, journalTypes } = masterData;

    const header = (
        <>
            <Head title="Create journal entry" />

            <HeaderLogo />

            <AccountingNavigationMenu />
        </>
    );

    const content = (
        <>
            <TitleSection boldText="Buku" subtitle="Kas" />

            <AccountingActionSection />

            <AddCashTransactionForm
                journalCategories={journalCategories}
                journalTypes={journalTypes}
                routeName="accounting-journal-entry.store"
                formTitle="Tambah"
            />
        </>
    );

    return (
        <ApplicationLayout
            header={header}
            content={content}
            contentClassName="bg-white py-4"
            direction="col-reverse"
            withContainerSpace={false}
        ></ApplicationLayout>
    );
}
