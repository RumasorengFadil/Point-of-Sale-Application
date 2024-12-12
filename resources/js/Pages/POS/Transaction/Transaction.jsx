import ApplicationLayout from "@/Layouts/ApplicationLayout";
import { useSearchProducts } from "@/hooks/useSearchProducts";
import ProductList from "@/Organisms/ProductList";
import SearchBar from "@/Components/SearchBar";
import Navbar from "@/Organisms/Navbar";
import Cart from "@/Organisms/Cart";
import ButtonNextSummary from "@/Organisms/ButtonNextSummary";

export default function Transaction({ auth, products, categories }) {
    const { filteredProducts, setSearchKeyword } = useSearchProducts(products, [
        "name",
        "price",
    ]);

    const header = (
        <>
            <Navbar backBtn={true} categories={categories} />
        </>
    );

    const content = (
        <>
            <SearchBar onChange={(e) => setSearchKeyword(e.target.value)} />

            <ProductList products={filteredProducts} />

            <ButtonNextSummary />
        </>
    );

    const footer = (
        <>
            <Cart />
        </>
    );
    return (
        <ApplicationLayout
            header={header}
            content={content}
            footer={footer}
            contentClassName = "py-0 lg:py-4"
            footerClassName = "py-0 lg:py-4"
            md="row"
        ></ApplicationLayout>
    );
}
