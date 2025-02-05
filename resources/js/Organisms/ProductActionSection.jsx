import ActionLinkCard from "@/Components/ActionCard/ActionLinkCard";
import { BsBoxFill } from "react-icons/bs";
import { MdAddBox } from "react-icons/md";

export default function ProductActionSection() {
    return (
        <div className="flex space-x-4 px-4">
            <ActionLinkCard
                href={route("product.index")}
                isActive={route().current() === "product.index"}
                caption="Produk"
                icon={BsBoxFill}
            />
            <ActionLinkCard
                href={route("product.create")}
                isActive={route().current() === "product.create"}
                caption="Tambah Produk"
                icon={MdAddBox}
            />
        </div>
    );
}
