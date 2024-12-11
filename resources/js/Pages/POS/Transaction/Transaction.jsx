import ApplicationLayout from "@/Layouts/ApplicationLayout";
import { useSearchProducts } from "@/hooks/useSearchProducts";
import ProductList from "@/Organisms/ProductList";
import SearchBar from "@/Components/SearchBar";
import Navbar from "@/Organisms/Navbar";
import Cart from "@/Organisms/Cart";
import ButtonNextToCart from "@/Organisms/ButtonNextToCart";
import ButtonPay from "@/Organisms/ButtonPay";

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

            <ButtonNextToCart />
        </>
    );

    const footer = (
        <>
            <Cart />

            <ButtonPay />
        </>
    );
    return (
        <ApplicationLayout
            header={header}
            content={content}
            footer={footer}
            md="row"
        ></ApplicationLayout>
    );
}
