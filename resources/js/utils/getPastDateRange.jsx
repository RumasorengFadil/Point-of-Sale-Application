export function getPastDateRange(daysAgo) {
    const endDate = new Date(); // Tanggal hari ini
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - daysAgo); // Mengurangi jumlah hari

    // Mengubah ke format YYYY-MM-DD
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    return {
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
    };
}
