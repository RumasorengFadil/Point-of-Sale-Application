/**
 * Calculate the total discount amount based on the price and discount percentage.
 * @param {number} price - The original price of the item.
 * @param {number} discount - The discount percentage to be applied.
 * @returns {number} - The total discount amount.
 * @throws {Error} - If price or discount is not a valid number or values are out of bounds.
 */
export const calculateDiscountAmount = (price, discount) => {
    if (typeof price !== 'number' || typeof discount !== 'number') {
        throw new Error('Price and discount must be numbers.');
    }
    if (price < 0 || discount < 0 || discount > 100) {
        throw new Error('Price must be non-negative and discount must be between 0 and 100.');
    }

    return (price * discount) / 100;
};
