const getCurrentDateTime = () => {
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const now = new Date();

    const dayName = days[now.getDay()]; // Nama hari
    const date = now.getDate(); // Tanggal
    const monthName = months[now.getMonth()]; // Nama bulan
    const year = now.getFullYear(); // Tahun
    const hours = String(now.getHours()).padStart(2, "0"); // Jam (2 digit)
    const minutes = String(now.getMinutes()).padStart(2, "0"); // Menit (2 digit)

    // Format hasil
    return {
        date : `${date} ${monthName} ${year}`,
        day : dayName,
        time: `${hours}:${minutes}`
    }
}

export default getCurrentDateTime;