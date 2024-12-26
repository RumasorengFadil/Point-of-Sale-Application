// TransactionPDF.js
import React from "react";
import { Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import PdfTitle from "../Pdf/PdfTitle";
import PdfTableHeader from "../Pdf/PdfTableHeader";
import PdfTablePage from "../Pdf/PdfTablePage";
import PdfTableRow from "../Pdf/PdfTableRow";
import PdfTableData from "../Pdf/PdfTableData";
import PdfTableBody from "../Pdf/PdfTableBody";
import PdfTableFooter from "../Pdf/PdfTableFooter";
import PdfTableGroup from "../Pdf/PdfTableGroup";
import PdfTableGroupOfData from "../Pdf/PdfTableGroupOfData";

// Define styles
const styles = StyleSheet.create({
    wideCell: {
        width: "1400px",
        textAlign: "left",
    },
    productContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
});

// Component
const TransactionReportPdf = ({
    transactionReport,
    convertDate = (value) => value,
}) => {
    const {transactionData, startDate, endDate, type} = transactionReport;
    // Calculate total overall transaction
    const totalTransaction = transactionData.data.reduce(
        (sum, item) => sum + item.total,
        0
    );
    return (
        <Document>
            <PdfTablePage style={styles.page}>
                {/* Title */}
                <PdfTitle>
                    Laporan Transaksi,{" "}
                    {type !== "default"
                        ? `${convertDate(
                              startDate
                          )} - ${convertDate(endDate)}`
                        : "Semua"}
                </PdfTitle>

                {/* Header */}
                <PdfTableHeader style={styles.header}>
                    <PdfTableData style={[styles.cell, styles.bold]}>
                        ID
                    </PdfTableData>
                    <PdfTableData style={[styles.cell, styles.bold]}>
                        Tanggal
                    </PdfTableData>

                    <PdfTableGroup>
                        <PdfTableGroupOfData style={styles.productContainer}>
                            <PdfTableData style={[styles.cell, styles.bold]}>
                                Nama Produk
                            </PdfTableData>
                            <PdfTableData style={[styles.cell, styles.bold]}>
                                Harga Item (Rp)
                            </PdfTableData>
                            <PdfTableData style={[styles.cell, styles.bold]}>
                                Jumlah Item
                            </PdfTableData>
                        </PdfTableGroupOfData>
                    </PdfTableGroup>

                    <PdfTableData style={[styles.cell, styles.bold]}>
                        Subtotal (Rp)
                    </PdfTableData>
                    <PdfTableData style={[styles.cell, styles.bold]}>
                        Total Diskon (Rp)
                    </PdfTableData>
                    <PdfTableData style={[styles.cell, styles.bold]}>
                        Pendapatan (Rp)
                    </PdfTableData>
                </PdfTableHeader>

                {/* Data Body */}
                <PdfTableBody>
                    {transactionData.data.map((item, index) => (
                        <PdfTableRow key={index} style={styles.row}>
                            <PdfTableData style={styles.cell}>
                                {item.id}
                            </PdfTableData>
                            <PdfTableData
                                style={[styles.cell, { overflow: "hidden" }]}
                            >
                                {convertDate(item.created_at, true)}
                            </PdfTableData>

                            {/* Product and Price Rows */}
                            <PdfTableGroup>
                                {item.details.map((detail, idx) => (
                                    <PdfTableGroupOfData
                                        key={idx}
                                        style={styles.productContainer}
                                    >
                                        <PdfTableData style={styles.cell}>
                                            {detail.product_name}
                                        </PdfTableData>
                                        <PdfTableData style={styles.cell}>
                                            {detail.unit_price.toLocaleString()}
                                        </PdfTableData>
                                        <PdfTableData style={styles.cell}>
                                            {detail.quantity}
                                        </PdfTableData>
                                    </PdfTableGroupOfData>
                                ))}
                            </PdfTableGroup>

                            {/* Totals */}
                            <PdfTableData style={styles.cell}>
                                {item.subtotal.toLocaleString()}
                            </PdfTableData>
                            <PdfTableData style={styles.cell}>
                                {item.discount.toLocaleString()}
                            </PdfTableData>
                            <PdfTableData style={styles.cell}>
                                {item.total.toLocaleString()}
                            </PdfTableData>
                        </PdfTableRow>
                    ))}
                </PdfTableBody>

                {/* Footer */}
                <PdfTableFooter>
                    <Text>
                        Total Pendapatan: Rp {totalTransaction.toLocaleString()}
                    </Text>
                </PdfTableFooter>
            </PdfTablePage>
        </Document>
    );
};

export default TransactionReportPdf;
