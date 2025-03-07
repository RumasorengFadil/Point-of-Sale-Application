import { Table } from "@/Components/Tabel/Table";
import { TableBody } from "@/Components/TableBody";
import { TableData } from "@/Components/TableData";
import { TableHeader } from "@/Components/TableHeader";
import { TableRow } from "@/Components/TableRow";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { toTitleCase } from "@/utils/toTitleCase";

export default function RecentTransactions({ journalEntries }) {
    return (
        <div className="flex flex-col space-y-5 mx-4 p-4 overflow-auto bg-white shadow-lg">
            <h1 className="font-bold">Transaksi Terbaru</h1>
            <Table>
                <TableHeader>
                    <TableData>ID</TableData>
                    <TableData>Keterangan</TableData>
                    <TableData>Kategori</TableData>
                    <TableData>Saldo (Rp)</TableData>
                </TableHeader>

                <TableBody>
                    {journalEntries.map(({ id, description, category, saldo }) => (
                        <TableRow key={id}>
                            <TableData>{id}</TableData>
                            <TableData>{description}</TableData>
                            <TableData>{toTitleCase(category.category_name)}</TableData>
                            <TableData>{formatNumberWithDots(saldo)}</TableData>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
