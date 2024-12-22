/**
 * Converts a UTC date to the user's local timezone dynamically.
 * 
 * @param {string | Date} utcDate - The UTC date to be converted (ISO string or Date object).
 * @returns {string} - The converted date in the user's local timezone.
 */
const convertUTCToLocal = (utcDate) => {
    // Ensure the input is a Date object
    const date = typeof utcDate === 'string' ? new Date(utcDate) : utcDate;

    // Check if the date is valid
    if (isNaN(date)) {
        throw new Error('Invalid date provided');
    }

    // Format the date using Intl.DateTimeFormat with the user's timezone
    const localDate = new Intl.DateTimeFormat(undefined, {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }).format(date);
    return localDate;
}

export default convertUTCToLocal;