import { Head } from "@inertiajs/react";
import TitleSection from "@/Components/SectionTitle";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import NavigationMenu from "@/Organisms/NavigationMenu";
import ProductActionSection from "@/Organisms/ProductActionSection";
import ProductTable from "@/Organisms/ProductTable";
import POSSidebarMenu from "@/Organisms/POSSidebarMenu";

export default function Product({ auth, products }) {
    const header = (
        <>
            <Head title="Produk" />

            <POSSidebarMenu />

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
