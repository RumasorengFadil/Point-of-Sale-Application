import { FaDeleteLeft } from "react-icons/fa6";

export default function Calculator({}) {
    return (
        <div className="flex flex-col px-4 h-full">
            <div className="flex flex-col space-y-1 rounded">
                <p className="text-sm text-gray-700">Jumlah yang dibayarkan</p>
                <p className="text-blue-200">Rp. 0</p>
            </div>

            <div className="flex h-full">
                <div className="flex flex-col flex-1 items-center justify-center">
                    <div className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        1
                    </div>
                    <div className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        4
                    </div>
                    <div className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        7
                    </div>
                    <div className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        C
                    </div>
                </div>
                <div className="flex flex-col flex-1 items-center justify-center">
                    <div className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        2
                    </div>
                    <div className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        5
                    </div>
                    <div className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        8
                    </div>
                    <div className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        0
                    </div>
                </div>
                <div className="flex flex-col flex-1 items-center justify-center">
                    <div className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        3
                    </div>
                    <div className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        6
                    </div>
                    <div className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        9
                    </div>
                    <div className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        000
                    </div>
                </div>
                <div className="flex flex-col flex-1 items-center justify-center">
                    <div className="flex flex-1 w-full py-2 justify-center items-center text-gray-700 cursor-pointer">
                        <FaDeleteLeft size={24} />
                    </div>
                    <div className="flex flex-1 w-full py-2 justify-center items-center text-white cursor-pointer bg-primary rounded">
                        Enter
                    </div>
                </div>
            </div>
        </div>
    );
}
