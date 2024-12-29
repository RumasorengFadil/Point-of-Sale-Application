import ActionCard from "@/Components/ActionCard/ActionCard";
import { BiSolidBook, BiSolidBookAdd } from "react-icons/bi";

export default function ActionCardSection() {
    return (
        <div className="flex space-x-4 px-4">
            <ActionCard isActive={true} caption="Buku Kas" icon={BiSolidBook} />
            <ActionCard caption="Tambah Kas" icon={BiSolidBookAdd} />
        </div>
    );
}
