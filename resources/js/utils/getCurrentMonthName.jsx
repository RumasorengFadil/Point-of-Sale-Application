export function getCurrentMonthName(locale = "id-ID") {
    return new Intl.DateTimeFormat(locale, { month: "long" }).format(
        new Date()
    );
}
