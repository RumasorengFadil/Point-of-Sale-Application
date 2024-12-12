import ApplicationLayout from "@/Layouts/ApplicationLayout";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Cart from "@/Organisms/Cart";
import PaymentMethod from "@/Organisms/PaymentMethod";
import PaymentInfo from "@/Organisms/PaymentInfo";
import Calculator from "@/Organisms/Calculator";
import ButtonCartSummary from "@/Components/Button/ButtonCartSummary";

export default function CreateTransaction({ auth, products, categories }) {
    const header = <Sidebar></Sidebar>;

    const content = <Cart buttonSummary={false} />;

    const footer = (
        <>
            <PaymentMethod />

            <PaymentInfo />

            <Calculator />

            <div className="px-4">
                <ButtonCartSummary />
            </div>
        </>
    );

    return (
        <ApplicationLayout
            header={header}
            content={content}
            footer={footer}
            contentClassName="hidden lg:flex bg-white"
            footerClassName="lg:flex-1 h-full"
        ></ApplicationLayout>
    );
}
