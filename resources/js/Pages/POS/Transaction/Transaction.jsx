import ApplicationLayout from "@/Layouts/ApplicationLayout";
import Cart from "@/Organisms/Cart";
import ButtonNextSummary from "@/Organisms/ButtonNextSummary";
import ProductSearchBar from "@/Organisms/ProductSearchBar";
import FilteredProductList from "@/Organisms/FilteredProductList";
import HeaderLogo from "@/Organisms/HeaderLogo";
import CategoryMenu from "@/Organisms/CategoryMenu";
import DynamicBackButton from "@/Organisms/DynamicBackButton";
import { Head } from "@inertiajs/react";

export default function Transaction({ auth, products, categories }) {
    const header = (
        <>
            <Head title="Transaction" />
            
            <DynamicBackButton auth={auth} />

            <HeaderLogo />

            <CategoryMenu categories={categories} />
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
            className="lg:space-x-4"
            headerClassName = "py-4 space-y-4"
            contentClassName = "py-4"
            withContainerSpace = {false}
        ></ApplicationLayout>
    );
}
