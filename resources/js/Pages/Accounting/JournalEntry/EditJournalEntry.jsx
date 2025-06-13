import { Head } from "@inertiajs/react";
import AddCashTransactionForm from "@/Organisms/AddCashTransactionForm ";
import AccountingLayout from "@/Layouts/AccountingLayout";
import { journalCategories } from "@/data/journalCategories";
import { journalTypes } from "@/data/journalTypes";

export default function EditJournalEntry({ journalEntry }) {

    const header = (
        <>
            <Head title="Create journal entry" />
        </>
    );

    const content = (
        <>
            <AddCashTransactionForm 
                journalCategories={journalCategories}
                journalTypes={journalTypes}
                routeName="accounting-journal-entry.update"
                formTitle="Edit"
                journalEntry={journalEntry}
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
