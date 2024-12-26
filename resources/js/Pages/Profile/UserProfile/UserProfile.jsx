import ApplicationLayout from "@/Layouts/ApplicationLayout";
import Navbar from "@/Organisms/Navbar";
import Cart from "@/Organisms/Cart";
import ButtonNextSummary from "@/Organisms/ButtonNextSummary";
import ProductSearchBar from "@/Organisms/ProductSearchBar";
import FilteredProductList from "@/Organisms/FilteredProductList";

export default function UserProfile({  }) {
    const header = (
        <>

        </>
    );

    const content = (
        <>
            UserProfile
        </>
    );

    const footer = (
        <>
        </>
    );
    return (
        <ApplicationLayout
            header={header}
            content={content}
            footer={footer}
            className = "lg:space-x-4"
        ></ApplicationLayout>
    );
}
