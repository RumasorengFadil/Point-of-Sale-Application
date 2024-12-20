// src/utils/printUtils.js
import { useReactToPrint } from "react-to-print";

/**
 * Custom hook untuk mencetak elemen React.
 * @param {React.Ref} ref - Referensi elemen yang akan dicetak.
 * @returns {Function} - Fungsi handler untuk memicu cetak.
 */
const usePrintHandler = (ref) => {
    return useReactToPrint({
        contentRef: ref,
        onAfterPrint: () => console.log("Printing completed!"),
        onPrintError: (err) => console.error("Printing error:", err),
    });
};


export default usePrintHandler;