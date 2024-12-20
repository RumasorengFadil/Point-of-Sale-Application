import PrimaryButton from "@/Components/PrimaryButton";
import React, { useRef } from "react";

const ReceiptActionButtons = ({}) => {
    const receiptRef = useRef();
    // const handlePrint = usePrintHandler(receiptRef);

    return (
        <div className="flex flex-col space-y-4 w-80">
            <PrimaryButton className="flex justify-center border border-white bg-primary px-10 w-full">
                <p>CETAK STRUK</p>
            </PrimaryButton>
            <PrimaryButton className="flex justify-center bg-white w-full">
                <p className="text-primary">SELESAI</p>
            </PrimaryButton>
        </div>
    );
};

export default ReceiptActionButtons;
