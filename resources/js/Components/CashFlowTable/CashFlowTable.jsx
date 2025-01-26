import TitleSection from "@/Components/SectionTitle";
import { Table } from "@/Components/Tabel/Table";
import { TableBody } from "@/Components/TableBody";
import { TableData } from "@/Components/TableData";
import { TableHeader } from "@/Components/TableHeader";
import { TableRow } from "@/Components/TableRow";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { FaFilePdf } from "react-icons/fa";

export default function CashFlowTable({ cashReport = {} }) {
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
        <div>
            <TitleSection boldText="Arus" subtitle="Kas" />
            <Table className="px-4">
                <TableHeader className="">
                    <TableData>Keterangan</TableData>
                    <TableData className="space-x-10">
                        <p>Jumlah (Rp)</p>
                        <FaFilePdf
                            className="text-red-500 cursor-pointer"
                            title="Download Pdf"
                            size={16}
                        />
                    </TableData>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableData className="font-bold">Kas Masuk</TableData>
                        <TableData></TableData>
                    </TableRow>
                    {cashInByCategory.map(
                        ({ category_name, total_nominal }, i) => (
                            <TableRow key={i}>
                                <TableData>{category_name}</TableData>
                                <TableData>
                                    {formatNumberWithDots(total_nominal)}
                                </TableData>
                            </TableRow>
                        )
                    )}
                    <TableRow>
                        <TableData className="font-bold">
                            Total Kas Masuk
                        </TableData>
                        <TableData>
                            {formatNumberWithDots(totalCashIn)}
                        </TableData>
                    </TableRow>

                    <TableRow>
                        <TableData className="font-bold">Kas Keluar</TableData>
                        <TableData></TableData>
                    </TableRow>
                    {cashOutByCategory.map(
                        ({ category_name, total_nominal }, i) => (
                            <TableRow key={i}>
                                <TableData>{category_name}</TableData>
                                <TableData>
                                    {formatNumberWithDots(total_nominal)}
                                </TableData>
                            </TableRow>
                        )
                    )}
                    <TableRow>
                        <TableData className="font-bold">
                            Total Kas Keluar
                        </TableData>
                        <TableData>
                            {formatNumberWithDots(totalCashOut)}
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData className="font-bold">Kas Bersih</TableData>
                        <TableData>{formatNumberWithDots(netCash)}</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData className="font-bold">
                            Saldo Kas Awal
                        </TableData>
                        <TableData>
                            {formatNumberWithDots(initialCashBalance)}
                        </TableData>
                    </TableRow>
                    <TableRow>
                        <TableData className="font-bold">
                            Saldo Kas Akhir
                        </TableData>
                        <TableData>
                            {formatNumberWithDots(finalCashBalance)}
                        </TableData>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
