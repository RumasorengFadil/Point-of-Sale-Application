/**
 * Menghitung hasil diskon dari harga dan persentase diskon.
 *
 * @param {number} price - Harga awal.
 * @param {number} discount - Persentase diskon (0-100).
 * @returns {number} - Harga setelah diskon diterapkan.
 * @throws {Error} - Jika input tidak valid.
 */
export const calculateDiscount = (price, discount) =>{
    if (typeof price !== 'number' || typeof discount !== 'number') {
        throw new Error('Price and discount must be numbers.');
    }
    if (price < 0 || discount < 0 || discount > 100) {
        throw new Error('Price must be non-negative and discount must be between 0 and 100.');
    }

    const discountAmount = (price * discount) / 100;
    return price - discountAmount;
}
