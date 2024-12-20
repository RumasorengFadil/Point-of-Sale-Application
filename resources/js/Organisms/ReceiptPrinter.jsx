import PrimaryButton from "@/Components/PrimaryButton";
import Receipt from "@/Components/Receipt/Receipt";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import usePrintHandler from "@/utils/printUtils";
import { Inertia } from "@inertiajs/inertia";
import { memo, useRef } from "react";

const ReceiptPrinter = memo(({ transaction }) => {
    const receiptRef = useRef(null);
    const handlePrint = usePrintHandler(receiptRef);
    return (
        <>
            {/* Tampilan Struk */}
            <Receipt
                transaction={transaction}
                formatNumberWithDots={formatNumberWithDots}
                ref={receiptRef}
            />

            {/* Tombol Cetak */}
            <div className="flex flex-col space-y-4 w-80">
                <PrimaryButton
                    onClick={handlePrint}
                    className="flex justify-center border border-white bg-primary px-10 w-full"
                >
                    <p>CETAK STRUK</p>
                </PrimaryButton>
                <PrimaryButton
                    onClick={() => Inertia.get(route("transaction.index"))}
                    className="flex justify-center bg-white w-full"
                >
                    <p className="text-primary">SELESAI</p>
                </PrimaryButton>
            </div>
        </>
    );
});

export default ReceiptPrinter;
