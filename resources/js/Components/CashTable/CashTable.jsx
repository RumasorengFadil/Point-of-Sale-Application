import { Table } from "../Tabel/Table";
import { TableBody } from "../TableBody";
import { TableData } from "../TableData";
import { TableHeader } from "../TableHeader";
import { TableRow } from "../TableRow";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import ActionableIcon from "../ActionableIcon ";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { toTitleCase } from "@/utils/toTitleCase";
import toastUtils from "@/utils/toastUtils";
import { useForm } from "@inertiajs/react";

export default function CashTable({ journalEntries, type = "cash" }) {
    const { delete: destroy } = useForm({});

    const formatNominal = (journalEntry, typeName) =>
        journalEntry.type.type_name === typeName
            ? formatNumberWithDots(journalEntry.nominal)
            : "-";

    const handleDelete = (e, journalId) => {
        e.preventDefault();
        if (confirm("Apakah Anda yakin ingin menghapus data yang dipilih?")) {
            destroy(route("accounting-journal-entry.destroy", journalId), {
                onError: (errors) => {
                    toastUtils.showError(errors);
                },
                onSuccess: (response) => {
                    toastUtils.showSuccess(response.props.flash);
                    setData("selectedBiblioIds", []);
                },
            });
        }
    };
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
                {journalEntries.map((journalEntry, i) => (
                    <TableRow key={i}>
                        <TableData className="min-w-20">
                            {journalEntry.id}
                        </TableData>
                        <TableData className="min-w-20">
                            {journalEntry.input_date}
                        </TableData>
                        <TableData className="min-w-20 text-primary">
                            {journalEntry.evidence ? (
                                <a
                                    href={`/storage/uploads/accounting/img/evidences/${journalEntry.evidence}`}
                                    target="_blank"
                                    className="cursor-pointer"
                                    rel="noopener noreferrer"
                                >
                                    Lihat
                                </a>
                            ) : (
                                "-"
                            )}
                        </TableData>
                        <TableData className="min-w-20">
                            {journalEntry.description}
                        </TableData>
                        <TableData className="min-w-20">
                            {toTitleCase(journalEntry.type.type_name)}
                        </TableData>
                        <TableData className="min-w-20">
                            {formatNominal(journalEntry, "pemasukan")}
                        </TableData>
                        <TableData className="min-w-20">
                            {formatNominal(journalEntry, "pengeluaran")}
                        </TableData>

                        {type === "flow" && (
                            <TableData
                                className={`in-w-20 ${
                                    type !== "flow" ? "hidden" : ""
                                }`}
                            >
                                {formatNumberWithDots(journalEntry.saldo)}
                            </TableData>
                        )}
                        <TableData className="flex space-x-4 min-w-20">
                            <ActionableIcon
                                className="text-primary"
                                icon={FaEdit}
                                size={16}
                                href={route(
                                    "accounting-journal-entry.edit",
                                    journalEntry.id
                                )}
                            />
                            <ActionableIcon
                                onClick={(e) => {
                                    handleDelete(e, journalEntry.id);
                                }}
                                className="text-red-500"
                                icon={RiDeleteBinFill}
                                size={16}
                            />
                        </TableData>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
