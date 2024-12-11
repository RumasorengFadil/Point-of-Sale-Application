import { memo } from "react";
import Product from "../Components/Product/Product";
import useCategoryStore from "@/store/useCategoryStore";

export default memo(function ProductList({ products }) {
    const category = useCategoryStore((state) => state.category);
    
    return (
        <div className="h-full overflow-auto py-2 w-full px-4">
            <div className="grid grid-cols-2 gap-7 | sm:grid-cols-3 |">
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
