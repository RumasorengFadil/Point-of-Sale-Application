/**
 * Checks if the screen size matches the given input.
 *
 * @param {string} size - The screen size to check ("small", "medium", "large").
 * @returns {boolean} - True if the screen size matches, otherwise false.
 */

export const SMALL = "small"
export const MEDIUM = "medium"
export const LARGE = "large"
export function isScreenSize(size) {
    if (typeof size !== "string") {
      throw new Error("Input must be a string: 'small', 'medium', or 'large'.");
    }
  
    switch (size.toLowerCase()) {
      case "small":
        return window.matchMedia("(max-width: 639px)").matches;
      case "medium":
        return window.matchMedia("(min-width: 640px) and (max-width: 1023px)").matches;
      case "large":
        return window.matchMedia("(min-width: 1024px)").matches;
      default:
        throw new Error("Invalid input. Accepted values are 'small', 'medium', or 'large'.");
    }
  }