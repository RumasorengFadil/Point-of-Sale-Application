import React, { memo, useState } from "react";
import useCategoryStore from "@/store/useCategoryStore";
import useSearch from "@/store/useSearch";
import useCartStore from "@/store/useCartStore";
import ProductItem from "@/Components/Product/ProductItem";
import { formatProductData } from "@/utils/formatProductData";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";

const FilteredProductList = memo(() => {
    const category = useCategoryStore((state) => state.category);
    const products = useSearch((state) => state.searchResult);
    const handleAddToCart = useCartStore((state) => state.handleAddToCart);

    // Handler untuk menambahkan produk ke keranjang
    const addToCart = (product) => {
        handleAddToCart(product); // Tambahkan produk ke keranjang
    };

    // Filter produk berdasarkan kategori
    const filteredProducts = products.filter(
        (product) => product.category.category_name === category
    );

    // Format data produk untuk Product component
    return (
        <div className="h-full px-4 overflow-auto py-2 w-full">
            <div className="grid grid-cols-2 gap-7 sm:grid-cols-3">
                {filteredProducts.map((product) => (
                    <div key={product.id}>
                        <ProductItem
                            onClick={() => addToCart(product)}
                            product={formatProductData(
                                product,
                                ({ price, discountedPrice }) => ({
                                    price: formatNumberWithDots(price),
                                    discountedPrice:
                                        formatNumberWithDots(discountedPrice),
                                })
                            )}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
});

export default FilteredProductList;
