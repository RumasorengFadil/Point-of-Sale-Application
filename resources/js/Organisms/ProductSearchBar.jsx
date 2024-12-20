import { memo, useEffect, useCallback } from "react";
import SearchBar from "@/Components/SearchBar";
import useSearch from "@/store/useSearch";
import { searchItems } from "@/utils/searchItems";

function ProductSearchBar({ products }) {
    const setSearchResult = useSearch((state) => state.setSearchResult);

    // Gunakan useEffect untuk memperbarui hasil pencarian jika produk berubah
    useEffect(() => {
        setSearchResult(products);
    }, [products, setSearchResult]);

    // Optimasi pencarian produk
    const handleSearch = useCallback((e) => {
        const searchValue = e.target.value;
        const searchedProducts = searchItems(products, searchValue, ["name", "price"]);
        setSearchResult(searchedProducts);
    }, [products, setSearchResult]);

    return <SearchBar onChange={handleSearch} />;
}

export default memo(ProductSearchBar);
