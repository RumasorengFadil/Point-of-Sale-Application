import { memo } from "react";
import Product from "../Components/Product/Product";
import useCategoryStore from "@/store/useCategoryStore";
import useSearch from "@/store/useSearch";

export default memo(function ProductList() {
    const category = useCategoryStore((state) => state.category);
    const products = useSearch((state)=>state.searchResult);
    
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
