import ActionLinkCard from "@/Components/ActionCard/ActionLinkCard";
import { Link, usePage } from "@inertiajs/react";
import { BiSolidBook, BiSolidBookAdd } from "react-icons/bi";

export default function ActionCardSection() {
    return (
        <div className="flex space-x-4 px-4">
            <ActionLinkCard
                href={route("accounting-journal-entry.index")}
                isActive={route().current() === "accounting-journal-entry.index"}
                caption="Buku Kas"
                icon={BiSolidBook}
            />

            <ActionLinkCard
                href={route("accounting-journal-entry.create")}
                isActive={route().current() === "accounting-journal-entry.create"}
                caption="Tambah Kas"
                icon={BiSolidBookAdd}
            />
        </div>
    );
}
