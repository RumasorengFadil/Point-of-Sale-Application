import Card from "@/Components/Card";
import { FigCaption } from "@/Components/FigCaption";
import React from "react";

const TransactionSuccessCard = ({}) => {
    return (
        <Card className="frelative lex flex-col space-y-3 py-10 items-center bg-white rounded-xl cursor-auto w-80" cursor="auto">
            <img src="/icons/app/success-transaction.svg" alt="" />
            <FigCaption className="space-y-1">
                <h1 className="text-2xl font-medium text-primary">
                    Transaksi Berhasil
                </h1>
                <p className="text-gray-900">
                    CATATAN: Jangan lupa memberi senyum <br /> untuk pelanggan.
                </p>
            </FigCaption>
            
            <div className="rounded-md bg-primary px-4">
                <p className="p-2 text-white">Metode Pembayaran: CASH</p>
                <hr className=""></hr>
                <p className="p-2 text-white">Total Kembalian: Rp. 79.000</p>
            </div>
        </Card>
    );
};

export default TransactionSuccessCard;
