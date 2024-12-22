/**
 * Fungsi untuk mengonversi waktu dari format ISO 8601 ke format yang lebih mudah dibaca.
 *
 * @param {string} isoDate - Tanggal dalam format ISO 8601 (contoh: "2024-12-16T06:52:21.000000Z").
 * @param {boolean} withTime - Jika true, menambahkan waktu ke dalam hasil (default: false).
 * @returns {string} - Tanggal yang diformat sesuai pilihan, bisa hanya tanggal atau tanggal dengan waktu.
 */
function convertDate(isoDate, withTime = false) {
    const date = new Date(isoDate);
  
    // Format tanggal dalam format '21 Januari 2024'
    const optionsDate = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('id-ID', optionsDate);
  
    // Jika waktu juga diminta, tambahkan waktu dalam format '21 Januari 2024, 09:55:07'
    if (withTime) {
      const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
      const formattedTime = date.toLocaleTimeString('id-ID', optionsTime);
      return `${formattedDate}, ${formattedTime}`;
    }
  
    // Hanya tanggal saja
    return formattedDate;
  }

  export default convertDate;
  