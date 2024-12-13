// hooks/useAutocomplete.js
import { useEffect, useMemo, useState } from "react";

export const useSearchProducts = (products, fields) => {
    const [searchKeyword, setSearchKeyword] = useState("");

    // Menggunakan useMemo untuk memfilter produk
    const filteredProducts = useMemo(() => {
        // console.log("Filtering products...");
        if (!searchKeyword.trim()) return products; // Jika kata kunci kosong, kembalikan semua produk.

        const lowerCaseKeyword = searchKeyword.toLowerCase();

        return products.filter((product) =>
            fields.some((field) =>
                String(product[field]).toLowerCase().includes(lowerCaseKeyword)
            )
        );
    }, [products, searchKeyword]); // Akan diperbarui hanya jika `products` atau `searchKeyword` berubah.

    return { filteredProducts, setSearchKeyword };
};
