import TitleSection from "@/Components/SectionTitle";
import { Table } from "@/Components/Tabel/Table";
import { TableBody } from "@/Components/TableBody";
import { TableData } from "@/Components/TableData";
import { TableHeader } from "@/Components/TableHeader";
import { TableRow } from "@/Components/TableRow";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";

export default function GrossProfitTable({ grossProfit = {} }) {
    console.log(grossProfit);
    return (
        <div>
            <TitleSection boldText="Pendapatan" subtitle="Bersih" />
            <Table className="px-4">
                <TableHeader className="">
                    <TableData>Keterangan</TableData>
                    <TableData>Jumlah (Rp)</TableData>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableData className="font-bold">Pendapatan</TableData>
                        <TableData></TableData>
                    </TableRow>
                    {grossProfit.map(({ category_name, total_nominal }) => (
                        <TableRow>
                            <TableData>{category_name}</TableData>
                            <TableData>
                                {formatNumberWithDots(total_nominal)}
                            </TableData>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableData className="font-bold">
                            Total Pendapatan
                        </TableData>
                        <TableData>2.000.000</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData className="font-bold">Laba Kotor</TableData>
                        <TableData>2.000.000</TableData>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
