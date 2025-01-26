export function getMonthDateRange(month) {
    // Pisahkan input menjadi tahun dan bulan
    const [year, monthStr] = month.split('-');
    
    // Buat tanggal untuk hari pertama bulan tersebut
    const firstDay = new Date(year, monthStr - 1, 1);
    
    // Buat tanggal untuk hari terakhir bulan tersebut
    const lastDay = new Date(year, monthStr, 0);
    
    // Format tanggal menjadi YYYY-MM-DD
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    
    // Kembalikan rentang tanggal
    return {
      startDate: formatDate(firstDay),
      endDate: formatDate(lastDay)
    };
  }
  