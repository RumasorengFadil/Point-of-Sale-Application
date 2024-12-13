import ApplicationLayout from "@/Layouts/ApplicationLayout";
import ProductList from "@/Organisms/ProductList";
import Navbar from "@/Organisms/Navbar";
import Cart from "@/Organisms/Cart";
import ButtonNextSummary from "@/Organisms/ButtonNextSummary";
import ProductSearchBar from "@/Organisms/ProductSearchBar";

export default function Transaction({ auth, products, categories }) {
    const header = (
        <>
            <Navbar backBtn={true} categories={categories} />
        </>
    );

    const content = (
        <>
            <ProductSearchBar products={products} />

            <ProductList />

            <ButtonNextSummary products={products} />
        </>
    );

    const footer = (
        <>
            <Cart products={products} />
        </>
    );
    return (
        <ApplicationLayout
            header={header}
            content={content}
            footer={footer}
            contentClassName="py-0 lg:py-4"
            footerClassName="py-0 lg:py-4"
        ></ApplicationLayout>
    );
}
