import TitleSection from "@/Components/SectionTitle";
import { Table } from "@/Components/Tabel/Table";
import { TableBody } from "@/Components/TableBody";
import { TableData } from "@/Components/TableData";
import { TableHeader } from "@/Components/TableHeader";
import { TableRow } from "@/Components/TableRow";

export default function CashFlowTable({}) {
    return (
        <div>
            <TitleSection boldText="Arus" subtitle="Kas" />
            <Table className="px-4">
                <TableHeader className="">
                    <TableData>Keterangan</TableData>
                    <TableData>Jumlah (Rp)</TableData>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableData className="font-bold">Kas Masuk</TableData>
                        <TableData></TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Penjualan Produk</TableData>
                        <TableData>2.000.000</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData className="font-bold">
                            Total Kas Masuk
                        </TableData>
                        <TableData>2.000.000</TableData>
                    </TableRow>

                    <TableRow>
                        <TableData className="font-bold">Kas Keluar</TableData>
                        <TableData></TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Pembelian bahan baku</TableData>
                        <TableData>500.000</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Biaya operasional</TableData>
                        <TableData>500.000</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData className="font-bold">
                            Total Kas Keluar
                        </TableData>
                        <TableData>1.000.000</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData className="font-bold">Kas Bersih</TableData>
                        <TableData>1.000.000</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData className="font-bold">
                            Saldo Kas Awal
                        </TableData>
                        <TableData>2.000.000</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData className="font-bold">
                            Saldo Kas Akhir
                        </TableData>
                        <TableData>3.000.000</TableData>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
