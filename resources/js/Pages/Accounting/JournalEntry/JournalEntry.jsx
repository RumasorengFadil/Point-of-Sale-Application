import ApplicationLayout from "@/Layouts/ApplicationLayout";
import { Head, Link } from "@inertiajs/react";
import HeaderLogo from "@/Organisms/HeaderLogo";
import AccountingNavigationMenu from "@/Organisms/AccountingNavigationMenu";
import TitleSection from "@/Components/SectionTitle";
import ActionCardSection from "@/Organisms/ActionCardSection";
import DateRangeFilter from "@/Organisms/DateRangePicker";
import { Table } from "@/Components/Tabel/Table";
import { TableHeader } from "@/Components/TableHeader";
import { TableData } from "@/Components/TableData";
import { TableBody } from "@/Components/TableBody";
import { TableRow } from "@/Components/TableRow";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import TabulatedCashView from "@/Organisms/TabulatedCashView";

export default function JournalEntry({ auth }) {
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

            <DateRangeFilter analytics={{}} />

            <TabulatedCashView />
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
