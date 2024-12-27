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
            className = "py-4 lg:space-x-4"
        ></ApplicationLayout>
    );
}
