import CashTable from "@/Components/CashTable/CashTable";
import { useState } from "react";

export default function TabulatedCashView({journalEntries}) {
    const [tab, setTab] = useState("book");
    return (
        <div className="flex flex-col space-y-4 px-4 overflow-auto">
            <div className="flex space-x-4 items-center">
                <div
                    onClick={() => setTab("book")}
                    className={`cursor-pointer transition-all ${
                        tab === "book"
                            ? "font-bold border-b-2 border-black"
                            : "text-gray-400 border-b-2 border-gray-400"
                    }`}
                >
                    <h1>Daftar Buku Kas</h1>
                </div>
                <div
                    onClick={() => setTab("flow")}
                    className={`cursor-pointer transition-all ${
                        tab === "flow"
                            ? "font-bold border-b-2 border-black"
                            : "text-gray-400 border-b-2 border-gray-400"
                    }`}
                >
                    <h1>Daftar Aliran Kas</h1>
                    <hr />
                </div>
            </div>

            {tab === "book" && <CashTable journalEntries={journalEntries} type="book" />}

            {tab === "flow" && <CashTable journalEntries={journalEntries} type="flow" />}
        </div>
    );
}
