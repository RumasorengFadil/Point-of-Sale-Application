import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { IoFastFood } from "react-icons/io5";

export default function OrderSummary({ analytics }) {
    const { totalByCategory } = analytics;

    return (
        <div className="p-4 overflow-y-auto">
            <div className="flex flex-col w-full h-full overflow-y-auto space-y-5 p-4 rounded shadow-lg bg-white">
                {/* Title */}
                <p className="font-bold">Produk Yang Terjual</p>

                {/* Ordered Products Header */}
                <div className="flex w-full h-8">
                    <div className="flex w-full h-max font-bold">Item</div>
                    <div className="flex w-full h-max font-bold">Terjual (Qty)</div>
                    <div className="flex w-full h-max font-bold">
                        Pendapatan (Rp)
                    </div>
                </div>

                {/* Ordered Products Lists */}
                {totalByCategory?.map((data, i) => (
                    <div className="flex flex-col space-y-5" key={i}>
                        <div className="flex flex-auto h-max justify-center items-center">
                            <div className="flex items-center space-x-2 w-full h-max">
                                <IoFastFood size={24} />
                                <p>{data.category_name}</p>
                            </div>
                            <div className="flex w-full h-max">
                                {formatNumberWithDots(data.total_product_sold)}
                            </div>
                            <div className="flex w-full h-max">
                                {formatNumberWithDots(data.total_revenue)}
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}
