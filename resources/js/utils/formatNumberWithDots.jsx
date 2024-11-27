/**
 * Format a number to include dots as thousands separators.
 *
 * @param {number} number - The number to format.
 * @returns {string} - The formatted number with dots as thousands separators.
 */
export function formatNumberWithDots(number) {
    if (isNaN(number)) {
      throw new Error("Input must be a valid number.");
    }
  
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }