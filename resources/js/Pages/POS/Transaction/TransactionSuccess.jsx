import ApplicationLayout from "@/Layouts/ApplicationLayout";
import ProductList from "@/Organisms/ProductList";
import Navbar from "@/Organisms/Navbar";
import Cart from "@/Organisms/Cart";
import ButtonNextSummary from "@/Organisms/ButtonNextSummary";
import ProductSearchBar from "@/Organisms/ProductSearchBar";

export default function TransactionSuccess({ auth, products, transaction }) {
    return (
        <div>
            {console.log(transaction)}
        </div>
    );
}
