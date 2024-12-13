/**
 * Memeriksa apakah nilai adalah angka.
 *
 * @param {string | number} value - Nilai yang akan diperiksa.
 * @returns {boolean} - Mengembalikan true jika nilai adalah angka, false jika tidak.
 */
export const isNumeric = (value) => {
    // Hilangkan semua pemisah ribuan (titik) untuk validasi
    const numericValue = value.replace(/\./g, '');
    // Periksa apakah hasilnya angka
    return !isNaN(numericValue) && numericValue.trim() !== '';
};
// function isNumberWithSeparators(value) {
    
// }