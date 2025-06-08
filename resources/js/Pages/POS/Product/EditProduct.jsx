import { Head } from "@inertiajs/react";
import POSLayout from "@/Layouts/POSLayout";
import TitleSection from "@/Components/SectionTitle";
import EditProductForm from "@/Organisms/EditProductForm";
import ProductForm from "@/Organisms/ProductForm";

export default function EditProduct({ auth, product, categories }) {
    const header = (
        <>
            <Head title="Edit Produk" />
        </>
    );

    const content = (
        <>
            <ProductForm
                action="update"
                categories={categories}
                product={product}
            />
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
