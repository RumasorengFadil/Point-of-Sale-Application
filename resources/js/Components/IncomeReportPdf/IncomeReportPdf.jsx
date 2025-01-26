// TransactionPDF.js
import React from "react";
import { Text, Document, StyleSheet, Font } from "@react-pdf/renderer";
import PdfTitle from "../Pdf/PdfTitle";
import PdfTableHeader from "../Pdf/PdfTableHeader";
import PdfTablePage from "../Pdf/PdfTablePage";
import PdfTableRow from "../Pdf/PdfTableRow";
import PdfTableData from "../Pdf/PdfTableData";
import PdfTableBody from "../Pdf/PdfTableBody";
import PdfTableFooter from "../Pdf/PdfTableFooter";
import PdfTableGroup from "../Pdf/PdfTableGroup";
import PdfTableGroupOfData from "../Pdf/PdfTableGroupOfData";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { convertDateFormat } from "@/utils/convertDateFormat";

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
const IncomeReportPdf = ({ incomeReport, filterParams }) => {
    const {
        incomeByCategory,
        totalIncome,
        expensesByCategory,
        totalExpenses,
        netIncome,
    } = incomeReport;

    return (
        <Document>
            <PdfTablePage style={styles.page}>
                {/* Title */}
                <PdfTitle>Pendapatan Bersih, Bulan {convertDateFormat(filterParams.month)}</PdfTitle>

                {/* Header */}
                <PdfTableHeader style={styles.header}>
                    <PdfTableData>
                        Keterangan
                    </PdfTableData>
                    <PdfTableData>
                        Jumlah (Rp)
                    </PdfTableData>
                </PdfTableHeader>

                {/* Data Body */}
                <PdfTableBody>
                    <PdfTableRow>
                        <PdfTableData>Pendapatan</PdfTableData>
                        <PdfTableData></PdfTableData>
                    </PdfTableRow>

                    {incomeByCategory.map(
                        ({ category_name, total_nominal }, i) => (
                            <PdfTableRow key={i}>
                                <PdfTableData>{category_name}</PdfTableData>
                                <PdfTableData>
                                    {formatNumberWithDots(total_nominal)}
                                </PdfTableData>
                            </PdfTableRow>
                        )
                    )}

                    <PdfTableRow>
                        <PdfTableData>Total Pendapatan</PdfTableData>
                        <PdfTableData>
                            {formatNumberWithDots(totalIncome)}
                        </PdfTableData>
                    </PdfTableRow>

                    <PdfTableRow>
                        <PdfTableData>Biaya</PdfTableData>
                        <PdfTableData></PdfTableData>
                    </PdfTableRow>

                    {expensesByCategory.map(
                        ({ category_name, total_nominal }, i) => (
                            <PdfTableRow key={i}>
                                <PdfTableData>{category_name}</PdfTableData>
                                <PdfTableData>
                                    {formatNumberWithDots(total_nominal)}
                                </PdfTableData>
                            </PdfTableRow>
                        )
                    )}

                    <PdfTableRow>
                        <PdfTableData>Total Biaya</PdfTableData>
                        <PdfTableData>
                            {formatNumberWithDots(totalExpenses)}
                        </PdfTableData>
                    </PdfTableRow>

                    <PdfTableRow>
                        <PdfTableData>Pendapatan Bersih</PdfTableData>
                        <PdfTableData>
                            {formatNumberWithDots(netIncome)}
                        </PdfTableData>
                    </PdfTableRow>
                </PdfTableBody>
            </PdfTablePage>
        </Document>
    );
};

export default IncomeReportPdf;
