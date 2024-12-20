export const formatProductData = (
    { id, name, image, price, discount },
    setData = (data) => data // default fungsi tidak melakukan apa-apa
) => {
    if (typeof setData !== "function") {
        throw new Error("setData must be a function");
    }

    const discountedPrice = price - (price * discount) / 100;

    const formattedData = {
        id,
        name,
        image,
        price,
        discount,
        discountedPrice,
    };

    // Menggabungkan data hasil setData ke objek yang diformat
    return {
        ...formattedData,
        ...setData(formattedData),
    };
};
