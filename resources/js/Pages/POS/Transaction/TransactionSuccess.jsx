import ApplicationLayout from "@/Layouts/ApplicationLayout";
import ReceiptPrinter from "@/Organisms/ReceiptPrinter";

export default function TransactionSuccess({ transaction }) {
    const content = (
        <>
            <ReceiptPrinter transaction={transaction} />
        </>
    );
    return (
        <ApplicationLayout
            contentClassName="bg-primary items-center justify-center"
            content={content}
        />
    );
}
