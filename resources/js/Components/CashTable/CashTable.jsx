import { Link } from "@inertiajs/react";
import { Table } from "../Tabel/Table";
import { TableBody } from "../TableBody";
import { TableData } from "../TableData";
import { TableHeader } from "../TableHeader";
import { TableRow } from "../TableRow";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import ActionableIcon from "../ActionableIcon ";

export default function CashTable({ type = "cash" }) {
    return (
        <Table className="shadow-lg p-4 overflow-auto">
            <TableHeader className="min-w-min lg:w-auto">
                <TableData className="min-w-20">ID</TableData>
                <TableData className="min-w-20">Tanggal</TableData>
                <TableData className="min-w-20">Bukti</TableData>
                <TableData className="min-w-20">Keterangan</TableData>
                <TableData className="min-w-20">Tipe</TableData>
                <TableData className="min-w-20">Pemasukan</TableData>
                <TableData className="min-w-20">Pengeluaran</TableData>
                <TableData
                    className={`in-w-20 ${type !== "flow" ? "hidden" : ""}`}
                >
                    Saldo
                </TableData>
                <TableData className="min-w-20">Aksi</TableData>
            </TableHeader>

            <TableBody className="min-w-min lg:w-auto overflow-auto">
                <TableRow>
                    <TableData className="min-w-20">12345</TableData>
                    <TableData className="min-w-20">01/05/2024</TableData>
                    <TableData className="min-w-20 text-primary">
                        <Link className="cursor-pointer">Lihat</Link>
                    </TableData>
                    <TableData className="min-w-20">
                        Pembelian bahan baku
                    </TableData>
                    <TableData className="min-w-20">Pengeluaran</TableData>
                    <TableData className="min-w-20">-</TableData>
                    <TableData className="min-w-20">500.000</TableData>
                    <TableData
                        className={`in-w-20 ${type !== "flow" ? "hidden" : ""}`}
                    >
                        500.000
                    </TableData>
                    <TableData className="flex space-x-4 min-w-20">
                        <ActionableIcon
                            className="text-primary"
                            icon={FaEdit}
                            size={16}
                        />
                        <ActionableIcon
                            className="text-red-500"
                            icon={RiDeleteBinFill}
                            size={16}
                        />
                    </TableData>
                </TableRow>
            </TableBody>
        </Table>
    );
}
