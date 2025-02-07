import { Head, Link } from "@inertiajs/react";
import TitleSection from "@/Components/SectionTitle";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import NavigationMenu from "@/Organisms/NavigationMenu";
import HeaderLogo from "@/Organisms/HeaderLogo";
import ProductActionSection from "@/Organisms/ProductActionSection";
import { Table } from "@/Components/Tabel/Table";
import { TableHeader } from "@/Components/TableHeader";
import { TableData } from "@/Components/TableData";
import { TableBody } from "@/Components/TableBody";
import { TableRow } from "@/Components/TableRow";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import ActionableIcon from "@/Components/ActionableIcon ";
import { IoFastFood } from "react-icons/io5";
import ProductTable from "@/Organisms/ProductTable";

export default function Product({ auth, products }) {
    const header = (
        <>
            <Head title="Produk" />

            <HeaderLogo />

            <NavigationMenu />
        </>
    );

    const content = (
        <>
            <TitleSection boldText="Inventaris" />

            <ProductActionSection />

            <ProductTable products={products} />
            {/* <CreateProductForm categories={categories} /> */}
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
