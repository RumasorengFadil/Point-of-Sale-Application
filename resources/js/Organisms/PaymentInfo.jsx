import LabelWithIcon from "@/Components/LabelWithIcon";
import { IoIosWallet } from "react-icons/io";

export default function PaymentInfo({}) {
    return (
        <div className="px-4">
            <LabelWithIcon
                label="Uang yang dibayarkan"
                className="font-semibold text-gray-700"
                icon={<IoIosWallet size={24} />}
            />
        </div>
    );
}
