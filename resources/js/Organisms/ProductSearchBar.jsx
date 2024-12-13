import { memo, useEffect } from "react";
import SearchBar from "@/Components/SearchBar";
import useSearch from "@/store/useSearch";
import { searchItems } from "@/utils/searchItems";

export default memo(function ProductSearchBar({ products }) {
    const setSearchResult = useSearch((state) => state.setSearchResult);

    useEffect(() => {
        setSearchResult(products);
    }, [products]);

    const handleSearch = (e) => {
        const searchedProducts = searchItems(products, e.target.value, [
            "name",
            "price",
        ]);
        setSearchResult(searchedProducts);
    };
    return <SearchBar onChange={(e) => handleSearch(e)} />;
});
