import { Head } from "@inertiajs/react";
import TitleSection from "@/Components/SectionTitle";
import ApplicationLayout from "@/Layouts/ApplicationLayout";
import NavigationMenu from "@/Organisms/NavigationMenu";
import HeaderLogo from "@/Organisms/HeaderLogo";
import ProductActionSection from "@/Organisms/ProductActionSection";
import CreateProductForm from "@/Organisms/CreateProductForm";

export default function CreateProduct({ auth, categories }) {
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

            <CreateProductForm categories={categories} />
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
