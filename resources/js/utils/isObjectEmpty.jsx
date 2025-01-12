export function isObjectEmpty(obj) {
    // Pastikan parameter adalah objek dan tidak null
    if (!obj || typeof obj !== 'object') {
        throw new Error('Parameter harus berupa objek yang valid');
    }
    // Periksa apakah objek kosong
    return Object.keys(obj).length === 0;
}