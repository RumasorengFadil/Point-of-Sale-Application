import ApplicationLayout from "@/Layouts/ApplicationLayout";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Cart from "@/Organisms/Cart";
import PaymentMethod from "@/Organisms/PaymentMethod";
import { IoIosWallet } from "react-icons/io";
import LabelWithIcon from "@/Components/LabelWithIcon";

export default function CreateTransaction({ auth, products, categories }) {
    const header = <Sidebar backBtn={true}></Sidebar>;

    const content = <Cart />;

    const footer = (
        <>
            <PaymentMethod />

            <div className="px-4">
                <LabelWithIcon
                    label="Uang yang dibayarkan"
                    className="font-semibold"
                    icon={<IoIosWallet size={24} />}
                />
            </div>

            <div className="px-4">
                <div className="flex flex-col h-full px-4 space-y-1 shadow-md+">
                    <p className="text-sm">Jumlah yang dibayarkan</p>
                    <p className="text-blue-200">Rp. 100.000</p>
                </div>
            </div>
        </>
    );

    return (
        <ApplicationLayout
            header={header}
            content={content}
            footer={footer}
            md="row"
            contentClassName="hidden lg:flex"
        ></ApplicationLayout>
    );
}
