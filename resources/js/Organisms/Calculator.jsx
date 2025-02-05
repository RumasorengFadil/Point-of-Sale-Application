import usePaidAmountStore from "@/store/usePaidAmountStore";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { FaDeleteLeft } from "react-icons/fa6";

export default function Calculator({}) {
    const paidAmount = usePaidAmountStore((state) => state.paidAmount);
    const setPaidAmount = usePaidAmountStore((state) => state.setPaidAmount);

    const handlePaidAmount = (e) =>{
        if(paidAmount.length > 7) return;

        setPaidAmount(paidAmount + e.target.textContent);
    }

    const handleClear = () => {
        setPaidAmount("");
    }

    const handleDelete = () => {
        setPaidAmount(paidAmount.slice(0,-1));
    }
    return (
        <div className="flex flex-col px-4 h-full">
            <div className="flex flex-col space-y-1 rounded">
                <p className="text-sm text-gray-700">Jumlah yang dibayarkan</p>
                <p className="text-blue-500">
                    Rp. {paidAmount ? formatNumberWithDots(paidAmount) : 0}
                </p>
            </div>

            <div className="flex h-full">
                <div className="flex flex-col flex-1 items-center justify-center">
                    <div
                        onClick={handlePaidAmount}
                        className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer"
                    >
                        1
                    </div>
                    <div onClick={handlePaidAmount} className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        4
                    </div>
                    <div onClick={handlePaidAmount} className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        7
                    </div>
                    <div onClick={handleClear} className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer bg-blue-100 rounded">
                        C
                    </div>
                </div>
                <div className="flex flex-col flex-1 items-center justify-center">
                    <div onClick={handlePaidAmount} className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        2
                    </div>
                    <div onClick={handlePaidAmount} className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        5
                    </div>
                    <div onClick={handlePaidAmount} className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        8
                    </div>
                    <div onClick={handlePaidAmount} className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        0
                    </div>
                </div>
                <div className="flex flex-col flex-1 items-center justify-center">
                    <div onClick={handlePaidAmount} className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        3
                    </div>
                    <div onClick={handlePaidAmount} className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        6
                    </div>
                    <div onClick={handlePaidAmount} className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        9
                    </div>
                    <div onClick={handlePaidAmount} className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        000
                    </div>
                </div>
                <div className="flex flex-col flex-1 items-center justify-center">
                    <div onClick={handleDelete} className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        <FaDeleteLeft size={24} />
                    </div>
                
                </div>
            </div>
        </div>
    );
}
