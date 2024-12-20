// src/components/Receipt.js
import React, { forwardRef } from "react";
import SummaryRow from "../SummaryRow";

const Receipt = forwardRef(
    ({ transaction, formatNumberWithDots = (value) => value }, ref) => {
        const { details, total, paid_amount, change, discount, subtotal } =
            transaction;

        return (
            <div
                ref={ref}
                className="w-80 p-4 bg-white text-black rounded-lg shadow-md"
            >
                <h1 className="text-lg font-bold text-center">Wadon Firly</h1>
                <p className="text-center text-sm">"Jalan pattimura"</p>
                <p className="text-center text-sm">Tel: 085244682780</p>
                <hr className="my-4" />
                <table className="w-full text-sm">
                    <thead>
                        <tr>
                            <th className="text-left">Item</th>
                            <th className="text-right">Qty</th>
                            <th className="text-right">Harga</th>
                            <th className="text-right">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details.map((item, index) => (
                            <tr key={index}>
                                <td>{item.product_name}</td>
                                <td className="text-right">{item.quantity}</td>
                                <td className="text-right">
                                    {formatNumberWithDots(item.unit_price)}
                                </td>
                                <td className="text-right">
                                    {formatNumberWithDots(
                                        item.unit_price * item.quantity
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <hr className="my-4" />
                <SummaryRow
                    label="Total Item:"
                    value={formatNumberWithDots(subtotal)}
                />
                <SummaryRow
                    label="Total Diskon:"
                    value={formatNumberWithDots(discount)}
                />
                <SummaryRow
                    label="Total Belanja:"
                    value={formatNumberWithDots(total)}
                />
                <SummaryRow
                    label="Tunai:"
                    value={formatNumberWithDots(paid_amount)}
                />
                <SummaryRow
                    label="Kembalian:"
                    value={formatNumberWithDots(change)}
                />
                <p className="mt-4 text-center">Thank you for your purchase!</p>
            </div>
        );
    }
);

export default Receipt;
