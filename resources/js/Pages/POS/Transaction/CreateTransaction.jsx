import ApplicationLayout from "@/Layouts/ApplicationLayout";
import { useSearchProducts } from "@/hooks/useSearchProducts";
import { TransactionProvider } from "@/Context/TransactionContext";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Cart from "@/Components/Transaction/Cart";
import CartGroupList from "@/Components/Transaction/CartGroupList";
import { FaMoneyBill } from "react-icons/fa";
import { isScreenSize, MEDIUM, SMALL } from "@/utils/isScreenSize";

export default function CreateTransaction({ auth, products, categories }) {
    const { filteredProducts, setSearchKeyword } = useSearchProducts(products, [
        "name",
        "price",
    ]);

    const transactionNavigation = <Sidebar backBtn={true}></Sidebar>;

    const TransactionContent = !isScreenSize(SMALL) &&
        !isScreenSize(MEDIUM) && (
            <Cart>
                <CartGroupList />
            </Cart>
        );

    const transactionPayment = (
        <div className="flex flex-col gap-8 px-4 lg:py-4 bg-white h-full w-full">
            <div className="font-bold hidden lg:block">Payment</div>
            <div className="flex space-x-5">
                <div
                    className={`flex flex-col cursor-pointer w-full py-5 lg:px-20 shadow-md h-20 rounded space-y-2 items-center justify-center p-2 bg-primary | lg:w-20 lg:shadow-none | `}
                >
                    <div>
                        <FaMoneyBill className={`text-white`} size={24} />
                    </div>
                    <p className={`text-sm text-white`}>{"Cash"}</p>
                </div>
                <div
                    className={`flex flex-col w-full py-5 lg:px-20 shadow-md h-20 rounded space-y-2 items-center justify-center p-2 bg-gray-400 | lg:w-20 lg:shadow-none | `}
                >
                    {/* <div>
                            <FaMoneyBill className={`text-white`} size={24} />
                        </div> */}
                    <p className={`text-sm text-white w-max`}>Coming Soon</p>
                </div>
                <div
                    className={`flex flex-col w-full py-5 lg:px-20 shadow-md h-20 rounded space-y-2 items-center justify-center p-2 bg-gray-400 | lg:w-20 lg:shadow-none | `}
                >
                    {/* <div>
                            <FaMoneyBill className={`text-white`} size={24} />
                        </div> */}
                    <p className={`text-sm text-white w-max`}>Coming Soon</p>
                </div>
            </div>
        </div>
    );
    return (
        <TransactionProvider>
            <ApplicationLayout
                header={transactionNavigation}
                content={TransactionContent}
                footer={transactionPayment}
                direction="col"
                md="row"
            ></ApplicationLayout>
        </TransactionProvider>
    );
}
