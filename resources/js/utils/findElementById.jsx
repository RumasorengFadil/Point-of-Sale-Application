/**
 * Mencari elemen dalam array berdasarkan ID.
 *
 * @param {Array<Object>} array - Array yang akan dicari.
 * @param {number|string} id - ID yang dicari.
 * @returns {Object|null} - Elemen yang ditemukan atau null jika tidak ada.
 */
const findElementById = (array, id) => {
    if (!Array.isArray(array)) {
        throw new Error('Parameter pertama harus berupa array.');
    }

    const element = array.find(item => item.id === id);
    return element || null;
}

export default findElementById;