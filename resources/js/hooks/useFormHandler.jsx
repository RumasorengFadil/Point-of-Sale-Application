import { convertToNumber } from "@/utils/convertToNumber";

const useFormHandler = (data, setData) => {
    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleNumberChange = (e, size) => {
        const inputValue = convertToNumber(e.target.value);
        
        // Hanya terima angka
        if (!/^\d*$/.test(inputValue)) return;

        // Batasi panjang input
        if (inputValue.toString().length > size) return;
        
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: inputValue,
        }));
    };

    return { data, setData, handleChange, handleNumberChange };
};

export default useFormHandler;
