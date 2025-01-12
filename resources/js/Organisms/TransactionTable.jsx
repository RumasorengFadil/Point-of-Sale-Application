import Modal from "@/Components/Modal";
import Receipt from "@/Components/Receipt/Receipt";
import { Table } from "@/Components/Tabel/Table";
import { TableBody } from "@/Components/TableBody";
import { TableData } from "@/Components/TableData";
import { TableHeader } from "@/Components/TableHeader";
import { TableRow } from "@/Components/TableRow";
import TransactionReportPdf from "@/Components/TransactionReportPdf/TransactionReportPdf";
import convertDate from "@/utils/convertDate";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useState } from "react";
import { FaFilePdf } from "react-icons/fa6";

const TransactionTable = ({ filterParams = {}, transactionReport = {} }) => {
    const { startDate, endDate, type } = filterParams;
    const [open, setOpen] = useState(false);
    const [transaction, setData] = useState({});

    const handleModal = (transaction) => {
        setOpen(!open);
        setData(transaction);
    };

    const renderProductDetails = (details, key) => (
        <div className="flex flex-col space-y-1">
            {details.map((item, index) => (
                <p className="w-max" key={`${key}-${index}`}>
                    {item[key]}
                </p>
            ))}
        </div>
    );

    const calculateTotal = (transactionReport) =>
        transactionReport.data.reduce(
            (acc, transaction) => acc + transaction.total,
            0
        );

    return (
        <>
            <Table className="relative px-4 overflow-auto">
                <TableHeader className="sticky bg-white top-0">
                    <TableData>ID</TableData>
                    <TableData>Tanggal</TableData>
                    <TableData className="hidden lg:flex">
                        Nama Produk
                    </TableData>
                    <TableData className="hidden lg:flex">
                        Harga Item (Rp)
                    </TableData>
                    <TableData className="hidden lg:flex">
                        Jumlah Item
                    </TableData>
                    <TableData className="hidden lg:flex">
                        Subtotal (Rp)
                    </TableData>
                    <TableData className="hidden lg:flex">
                        Total Diskon (Rp)
                    </TableData>
                    <TableData>Pendapatan (Rp)</TableData>
                    <TableData className="flex space-x-2 items-center">
                        <p>Aksi</p>
                        <PDFDownloadLink
                            document={
                                <TransactionReportPdf
                                    transactionReport={transactionReport}
                                    type={type}
                                    startDate={startDate}
                                    endDate={endDate}
                                    convertDate={convertDate}
                                />
                            }
                            fileName="Laporan-Transaksi"
                        >
                            <FaFilePdf
                                className="text-red-500 cursor-pointer"
                                title="Download Pdf"
                                size={16}
                            />
                        </PDFDownloadLink>
                    </TableData>
                </TableHeader>

                <TableBody>
                    {transactionReport.data.map((transaction) => (
                        <TableRow key={transaction.id}>
                            <TableData className="text-gray-900 overflow-hidden">
                                {transaction.id}
                            </TableData>
                            <TableData className="text-gray-900">
                                {convertDate(transaction.created_at, true)}
                            </TableData>
                            <TableData className="text-gray-900 overflow-hidden hidden lg:flex">
                                {renderProductDetails(
                                    transaction.details,
                                    "product_name"
                                )}
                            </TableData>
                            <TableData className="text-gray-900 hidden lg:flex">
                                <div className="flex flex-col space-y-1">
                                    {transaction.details.map((item, index) => (
                                        <p key={index}>
                                            {formatNumberWithDots(
                                                item.unit_price
                                            )}
                                        </p>
                                    ))}
                                </div>
                            </TableData>
                            <TableData className="text-gray-900 hidden lg:flex">
                                {renderProductDetails(
                                    transaction.details,
                                    "quantity"
                                )}
                            </TableData>
                            <TableData className="text-gray-900 hidden lg:flex">
                                {formatNumberWithDots(transaction.subtotal)}
                            </TableData>
                            <TableData className="text-gray-900 hidden lg:flex">
                                {formatNumberWithDots(transaction.discount)}
                            </TableData>
                            <TableData className="text-gray-700">
                                {formatNumberWithDots(transaction.total)}
                            </TableData>
                            <TableData className="text-primary">
                                <p
                                    onClick={() => handleModal(transaction)}
                                    className="cursor-pointer"
                                >
                                    Detail
                                </p>
                            </TableData>
                        </TableRow>
                    ))}
                    {/* <TableRow>
                        <TableData className="font-semibold">
                            Total Pendapatan
                        </TableData>
                        <TableData /> <TableData /> <TableData /> <TableData />{" "}
                        <TableData /> <TableData />
                        <TableData className="text-gray-700">
                            {formatNumberWithDots(calculateTotal(transactionReport.data))}
                        </TableData>
                        <TableData />
                    </TableRow> */}
                </TableBody>
            </Table>

            <Modal
                show={open}
                onClose={() => handleModal(transaction)}
                maxWidth="max"
                className="flex justify-center"
            >
                <Receipt
                    transaction={transaction}
                    formatNumberWithDots={formatNumberWithDots}
                />
            </Modal>
        </>
    );
};

export default TransactionTable;
