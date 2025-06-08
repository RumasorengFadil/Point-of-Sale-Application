import { Head } from "@inertiajs/react";
import TitleSection from "@/Components/SectionTitle";
import ProductActionSection from "@/Organisms/ProductActionSection";
import CreateProductForm from "@/Organisms/CreateProductForm";
import POSLayout from "@/Layouts/POSLayout";
import ProductForm from "@/Organisms/ProductForm";

export default function CreateProduct({ auth, categories }) {
    const header = (
        <>
            <Head title="Produk" />
        </>
    );

    const content = (
        <>
            <TitleSection boldText="Inventaris" />

            <ProductActionSection />
            
            <ProductForm action="store" categories={categories} />
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
