import { memo } from "react";
import Product from "./Product";
import { useTransactionContext } from "@/Context/TransactionContext";

export default memo(function ProductList({ products }) {
    const { category, setCategory } = useTransactionContext();

    return (
        <div className="h-full overflow-auto py-2 w-full">
            <div className="grid grid-cols-2 gap-7  | sm:grid-cols-3 |">
                {products.map((product) => {
                    if (product.category.category_name !== category) return;
                    return (
                        <div key={product.id}>
                            <Product key={product.id} product={product} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
});
