import ApplicationLayout from "@/Layouts/ApplicationLayout";
import { Head } from "@inertiajs/react";
import HeaderLogo from "@/Organisms/HeaderLogo";
import AccountingNavigationMenu from "@/Organisms/AccountingNavigationMenu";
import TitleSection from "@/Components/SectionTitle";
import ActionCardSection from "@/Organisms/ActionCardSection";
import FormField from "@/Components/FormField/FormField";
import { FormSelectField } from "@/Components/FormSelectField/FormSelectField";
import { FormOptionField } from "@/Components/FormOptionField";

export default function CreateJournalEntry({}) {
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

            <ActionCardSection />

            <div className="flex flex-col space-y-4">
                <TitleSection boldText="Tambah" subtitle="Kas" />

                <FormField
                    label="Tanggal Transaksi"
                    type="date"
                    error={""}
                    className="px-4"
                />

                <FormSelectField
                    label="Jenis Transaksi"
                    error={""}
                    className="px-4"
                >
                    <FormOptionField label="Pemasukan" />
                    <FormOptionField label="Pengeluaran" />
                </FormSelectField>

                <FormSelectField
                    label="Kategori Transaksi"
                    error={""}
                    className="px-4"
                >
                    <FormOptionField label="Pemasukan" />
                    <FormOptionField label="Pengeluaran" />
                </FormSelectField>

                <FormField
                    label="Tanggal Transaksi"
                    type="date"
                    error={""}
                    className="px-4"
                />
                <FormField
                    label="Nominal"
                    type="number"
                    error={""}
                    className="px-4"
                />
                <FormField
                    label="Deskripsi Transaksi"
                    type="text"
                    error={""}
                    className="px-4"
                />
            </div>
        </>
    );

    return (
        <ApplicationLayout
            header={header}
            content={content}
            contentClassName="bg-white"
            direction="col-reverse"
        ></ApplicationLayout>
    );
}
