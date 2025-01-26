// TransactionPDF.js
import React from "react";
import { Document, StyleSheet, Font } from "@react-pdf/renderer";
import PdfTitle from "../Pdf/PdfTitle";
import PdfTableHeader from "../Pdf/PdfTableHeader";
import PdfTablePage from "../Pdf/PdfTablePage";
import PdfTableRow from "../Pdf/PdfTableRow";
import PdfTableData from "../Pdf/PdfTableData";
import PdfTableBody from "../Pdf/PdfTableBody";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { convertDateFormat } from "@/utils/convertDateFormat";
import { toTitleCase } from "@/utils/toTitleCase";

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
const CashReportPdf = ({ cashReport, filterParams }) => {
    const {
        cashInByCategory,
        totalCashIn,
        cashOutByCategory,
        totalCashOut,
        netCash,
        initialCashBalance,
        finalCashBalance,
    } = cashReport;

    return (
        <Document>
            <PdfTablePage style={styles.page}>
                {/* Title */}
                <PdfTitle>
                    Laporan Arus Kas,  {""}
                    {!filterParams.type
                        ? "Keseluruhan"
                        : `Bulan ${convertDateFormat(filterParams.month)}`}{" "}
                </PdfTitle>

                {/* Header */}
                <PdfTableHeader style={styles.header}>
                    <PdfTableData>Keterangan</PdfTableData>
                    <PdfTableData>Jumlah (Rp)</PdfTableData>
                </PdfTableHeader>

                {/* Data Body */}
                <PdfTableBody>
                    <PdfTableRow>
                        <PdfTableData>Kas Masuk</PdfTableData>
                        <PdfTableData></PdfTableData>
                    </PdfTableRow>

                    {cashInByCategory.map(
                        ({ category_name, total_nominal }, i) => (
                            <PdfTableRow key={i}>
                                <PdfTableData>{toTitleCase(category_name)}</PdfTableData>
                                <PdfTableData>
                                    {formatNumberWithDots(total_nominal)}
                                </PdfTableData>
                            </PdfTableRow>
                        )
                    )}

                    <PdfTableRow>
                        <PdfTableData>Total Kas Masuk</PdfTableData>
                        <PdfTableData>
                            {formatNumberWithDots(totalCashIn)}
                        </PdfTableData>
                    </PdfTableRow>

                    <PdfTableRow>
                        <PdfTableData>Kas Keluar</PdfTableData>
                        <PdfTableData></PdfTableData>
                    </PdfTableRow>

                    {cashOutByCategory.map(
                        ({ category_name, total_nominal }, i) => (
                            <PdfTableRow key={i}>
                                <PdfTableData>{toTitleCase(category_name)}</PdfTableData>
                                <PdfTableData>
                                    {formatNumberWithDots(total_nominal)}
                                </PdfTableData>
                            </PdfTableRow>
                        )
                    )}

                    <PdfTableRow>
                        <PdfTableData>Total Kas Keluar</PdfTableData>
                        <PdfTableData>
                            {formatNumberWithDots(totalCashOut)}
                        </PdfTableData>
                    </PdfTableRow>

                    <PdfTableRow>
                        <PdfTableData>Kas Bersih</PdfTableData>
                        <PdfTableData>
                            {formatNumberWithDots(netCash)}
                        </PdfTableData>
                    </PdfTableRow>
                    <PdfTableRow>
                        <PdfTableData>Saldo Kas Awal</PdfTableData>
                        <PdfTableData>
                            {formatNumberWithDots(initialCashBalance)}
                        </PdfTableData>
                    </PdfTableRow>
                    <PdfTableRow>
                        <PdfTableData>Saldo Kas Akhir</PdfTableData>
                        <PdfTableData>
                            {formatNumberWithDots(finalCashBalance)}
                        </PdfTableData>
                    </PdfTableRow>
                </PdfTableBody>
            </PdfTablePage>
        </Document>
    );
};

export default CashReportPdf;
