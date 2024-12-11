import ApplicationLayout from "@/Layouts/ApplicationLayout";
import { useSearchProducts } from "@/hooks/useSearchProducts";
import ProductList from "@/Components/Product/ProductList";
import { TransactionProvider } from "@/Context/TransactionContext";
import FloatingCartSummary from "@/Components/Transaction/FloatingCartSummary";
import SearchBar from "@/Components/SearchBar";
import Sidebar from "@/Components/Sidebar/Sidebar";
import ProductCategoryTabBar from "@/Components/Transaction/ProductCategoryTabBar";
import Cart from "@/Components/Transaction/Cart";
import CartListGroup from "@/Components/Transaction/CartGroupList";
import CartGroupList from "@/Components/Transaction/CartGroupList";
import Navbar from "@/Organisms/Navbar";

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

            <FloatingCartSummary
                className="lg:hidden"
                onClick={(showCart, setShowCart) => {
                    setShowCart(!showCart);
                }}
                label="Lanjut"
            />
        </>
    );

    const transactionCart = (
        <>
            <Cart>
                <CartGroupList />
            </Cart>
        </>
    );
    return (
        <TransactionProvider>
            <ApplicationLayout
                header={header}
                content={content}
                footer={transactionCart}
                direction="col"
                md="row"
            ></ApplicationLayout>
        </TransactionProvider>
    );
}
