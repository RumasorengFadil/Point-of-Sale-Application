import ApplicationLayout from "@/Layouts/ApplicationLayout";
import { Head } from "@inertiajs/react";
import HeaderLogo from "@/Organisms/HeaderLogo";
import AccountingNavigationMenu from "@/Organisms/AccountingNavigationMenu";
import AddCashTransactionForm from "@/Organisms/AddCashTransactionForm ";

export default function EditJournalEntry({ masterData, journalEntry }) {
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
        <ApplicationLayout
            header={header}
            content={content}
            contentClassName="bg-white py-4"
            direction="col-reverse"
            withContainerSpace={false}
        ></ApplicationLayout>
    );
}
