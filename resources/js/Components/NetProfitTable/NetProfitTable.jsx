import TitleSection from "@/Components/SectionTitle";
import { Table } from "@/Components/Tabel/Table";
import { TableBody } from "@/Components/TableBody";
import { TableData } from "@/Components/TableData";
import { TableHeader } from "@/Components/TableHeader";
import { TableRow } from "@/Components/TableRow";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { FaFilePdf } from "react-icons/fa";
import IncomeReportPdf from "../IncomeReportPdf/IncomeReportPdf";
import { toTitleCase } from "@/utils/toTitleCase";

export default function NetProfitTable({ incomeReport = {}, filterParams = {} }) {
    const {
        incomeByCategory,
        totalIncome,
        expensesByCategory,
        totalExpenses,
        netIncome,
    } = incomeReport;
    return (
        <div>
            <TitleSection boldText="Pendapatan" subtitle="Bersih" />
            <Table className="px-4">
                <TableHeader className="">
                    <TableData>Keterangan</TableData>
                    <TableData className="space-x-10">
                        <p>Jumlah (Rp)</p>

                        <PDFDownloadLink
                        document={<IncomeReportPdf incomeReport={incomeReport} filterParams={filterParams}  />}
                            fileName="Laporan-Finansial"
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
                    <TableRow>
                        <TableData className="font-bold">Pendapatan</TableData>
                        <TableData></TableData>
                    </TableRow>
                    {incomeByCategory.map(
                        ({ category_name, total_nominal }, i) => (
                            <TableRow key={i}>
                                <TableData>{toTitleCase(category_name)}</TableData>
                                <TableData>
                                    {formatNumberWithDots(total_nominal)}
                                </TableData>
                            </TableRow>
                        )
                    )}
                    <TableRow>
                        <TableData className="font-bold">
                            Total Pendapatan
                        </TableData>
                        <TableData>
                            {formatNumberWithDots(totalIncome)}
                        </TableData>
                    </TableRow>

                    <TableRow>
                        <TableData className="font-bold">Biaya</TableData>
                        <TableData></TableData>
                    </TableRow>
                    {expensesByCategory.map(
                        ({ category_name, total_nominal }, i) => (
                            <TableRow key={i}>
                                <TableData>{toTitleCase(category_name)}</TableData>
                                <TableData>
                                    {formatNumberWithDots(total_nominal)}
                                </TableData>
                            </TableRow>
                        )
                    )}
                    <TableRow>
                        <TableData className="font-bold">Total Biaya</TableData>
                        <TableData>
                            {formatNumberWithDots(totalExpenses)}
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData className="font-bold">
                            Pendapatan Bersih
                        </TableData>
                        <TableData>{formatNumberWithDots(netIncome)}</TableData>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
