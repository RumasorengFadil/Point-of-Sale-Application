const getThisWeekMonthYear = () => {
    const today = new Date();
    
    // Helper function to format date as YYYY-MM-DD
    const formatDate = (date) => date.toISOString().split('T')[0];

    // This Week
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Sunday
    const endOfWeek = new Date(today);
    endOfWeek.setDate(today.getDate() + (6 - today.getDay())); // Saturday

    // This Month
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    // This Year
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const endOfYear = new Date(today.getFullYear(), 11, 31);

    return {
        thisWeek: {
            startDate: formatDate(startOfWeek),
            endDate: formatDate(endOfWeek),
        },
        thisMonth: {
            startDate: formatDate(startOfMonth),
            endDate: formatDate(endOfMonth),
        },
        thisYear: {
            startDate: formatDate(startOfYear),
            endDate: formatDate(endOfYear),
        },
    };
}

export default getThisWeekMonthYear;