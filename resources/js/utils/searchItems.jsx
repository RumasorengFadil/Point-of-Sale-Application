
export const searchItems = (items, searchKeyword, fields) => {
    // console.log("Filtering items...");
    if (!searchKeyword.trim()) return items; // Jika kata kunci kosong, kembalikan semua produk.

    const lowerCaseKeyword = searchKeyword.toLowerCase();

    return items.filter((item) =>
        fields.some((field) =>
            String(item[field]).toLowerCase().includes(lowerCaseKeyword)
        )
    );
};
