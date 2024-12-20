/**
 * Format a number into currency format.
 *
 * @param {number} amount - The numeric value to format.
 * @param {string} [locale='id-ID'] - The locale to use for formatting (e.g., 'en-US', 'id-ID').
 * @param {string} [currency='IDR'] - The currency code (e.g., 'USD', 'IDR').
 * @returns {string} The formatted currency string.
 */
export function formatCurrency(amount, locale = 'id-ID', currency = 'IDR') {
    if (typeof amount !== 'number' || isNaN(amount)) {
        throw new Error('Invalid amount: Must be a number.');
    }

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(amount);
}
