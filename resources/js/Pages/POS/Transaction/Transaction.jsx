import ApplicationLayout from "@/Layouts/ApplicationLayout";
import Navbar from "@/Organisms/Navbar";
import Cart from "@/Organisms/Cart";
import ButtonNextSummary from "@/Organisms/ButtonNextSummary";
import ProductSearchBar from "@/Organisms/ProductSearchBar";
import FilteredProductList from "@/Organisms/FilteredProductList";

export default function Transaction({ auth, products, categories }) {
    const header = (
        <>
            <Navbar backBtn={true} categories={categories} />
        </>
    );

    const content = (
        <>
            <ProductSearchBar products={products} />

            <FilteredProductList />

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
