import { Table } from "@/Components/Tabel/Table";
import { TableBody } from "@/Components/TableBody";
import { TableData } from "@/Components/TableData";
import { TableHeader } from "@/Components/TableHeader";
import { TableRow } from "@/Components/TableRow";

export default function RecentTransactions({ analytics }) {
    // const { totalByCategory } = analytics;

    return (
        <div className="flex flex-col space-y-5 mx-4 p-4 overflow-auto bg-white shadow-lg">
            <h1 className="font-bold">Transaksi Terbaru</h1>
            <Table>
                <TableHeader>
                    <TableData>ID</TableData>
                    <TableData>Keterangan</TableData>
                    <TableData>Kategori</TableData>
                    <TableData>Saldo</TableData>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableData>12345</TableData>
                        <TableData>Penjualan</TableData>
                        <TableData>-</TableData>
                        <TableData>300.000</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>12345</TableData>
                        <TableData>Penjualan</TableData>
                        <TableData>-</TableData>
                        <TableData>300.000</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>12345</TableData>
                        <TableData>Penjualan</TableData>
                        <TableData>-</TableData>
                        <TableData>300.000</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>12345</TableData>
                        <TableData>Penjualan</TableData>
                        <TableData>-</TableData>
                        <TableData>300.000</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>12345</TableData>
                        <TableData>Penjualan</TableData>
                        <TableData>-</TableData>
                        <TableData>300.000</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>12345</TableData>
                        <TableData>Penjualan</TableData>
                        <TableData>-</TableData>
                        <TableData>300.000</TableData>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
