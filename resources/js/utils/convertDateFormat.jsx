// utils/convertDateFormat.js
export function convertDateFormat(dateStr) {
    const [year, month] = dateStr.split("-"); // Pisahkan tahun dan bulan
    const date = new Date(year, month - 1); // Membuat objek Date

    // Mengonversi menjadi format "MMMM YYYY" (bulan penuh + tahun)
    const monthName = new Intl.DateTimeFormat("id-ID", {
        month: "long",
    }).format(date); // Nama bulan dalam bahasa Indonesia
    const formattedDate = `${
        monthName.charAt(0).toUpperCase() + monthName.slice(1)
    } ${year}`; // Membuat format seperti "Mei 2025"

    return formattedDate;
}
