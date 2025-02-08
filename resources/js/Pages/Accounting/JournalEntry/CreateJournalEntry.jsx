import { Head } from "@inertiajs/react";
import TitleSection from "@/Components/SectionTitle";
import AddCashTransactionForm from "@/Organisms/AddCashTransactionForm ";
import AccountingActionSection from "@/Organisms/AccountingActionSection";
import AccountingLayout from "@/Layouts/AccountingLayout";

export default function CreateJournalEntry({ masterData }) {
    const { journalCategories, journalTypes } = masterData;

    const header = (
        <>
            <Head title="Create journal entry" />
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
        <AccountingLayout
            header={header}
            content={content}
            contentClassName="bg-white py-4"
            direction="col-reverse"
            withContainerSpace={false}
        ></AccountingLayout>
    );
}
