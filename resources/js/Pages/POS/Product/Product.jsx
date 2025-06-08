import { Head } from "@inertiajs/react";
import TitleSection from "@/Components/SectionTitle";
import ProductActionSection from "@/Organisms/ProductActionSection";
import ProductTable from "@/Organisms/ProductTable";
import POSLayout from "@/Layouts/POSLayout";

export default function Product({ auth, products }) {
    const header = (
        <>
            <Head title="Produk" />
        </>
    );

    const content = (
        <>
            <TitleSection boldText="Inventaris" />

            <ProductActionSection />

            <ProductTable products={products} />
        </>
    );

    return (
        <POSLayout
            header={header}
            content={content}
            contentClassName="bg-white py-4"
            direction="col-reverse"
            withContainerSpace={false}
        ></POSLayout>
    );
}
