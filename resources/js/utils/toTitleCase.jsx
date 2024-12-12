/**
 * Converts a string to title case (capitalizes the first letter of each word).
 *
 * @param {string} input - The string to convert.
 * @returns {string} - The title-cased string.
 */
export const toTitleCase = (input) => {
    if (!input) return ""; // Return an empty string if input is falsy

    return input
        .toLowerCase() // Convert the entire string to lowercase
        .split(" ") // Split the string into words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(" "); // Join the words back into a single string
};
