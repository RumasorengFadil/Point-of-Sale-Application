export const convertToNumber = (formattedNumber) => {
    if (typeof formattedNumber !== "string") {
        throw new TypeError("Input harus berupa string.");
    }

    // Menghilangkan semua tanda titik dari string
    const plainNumber = formattedNumber.replace(/\./g, "");

    // Mengonversi string menjadi angka
    const result = Number(plainNumber);

    if (isNaN(result)) {
        throw new Error("Input tidak dapat dikonversi menjadi angka.");
    }

    return result;
};
