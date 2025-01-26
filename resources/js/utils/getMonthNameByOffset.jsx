// utils/getMonthNameByOffset.js
export function getMonthNameByOffset(offset=0) {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + offset); // Menambahkan offset bulan

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Menyusun bulan dalam format dua digit

    return `${year}-${month}`;
}
