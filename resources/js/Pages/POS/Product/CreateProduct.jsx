import { Head } from "@inertiajs/react";
import TitleSection from "@/Components/SectionTitle";
import ProductActionSection from "@/Organisms/ProductActionSection";
import POSLayout from "@/Layouts/POSLayout";
import ProductForm from "@/Organisms/ProductForm";
import { productCategories } from "@/data/productCategories";

export default function CreateProduct({ auth }) {
    const header = (
        <>
            <Head title="Produk" />
        </>
    );

    const content = (
        <>
            <TitleSection boldText="Inventaris" />

            <ProductActionSection />
            
            <ProductForm action="store" categories={productCategories} />
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
