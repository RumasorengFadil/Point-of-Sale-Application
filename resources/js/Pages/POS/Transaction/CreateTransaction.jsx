import ApplicationLayout from "@/Layouts/ApplicationLayout";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Cart from "@/Organisms/Cart";
import PaymentMethod from "@/Organisms/PaymentMethod";
import PaymentInfo from "@/Organisms/PaymentInfo";
import Calculator from "@/Organisms/Calculator";
import ButtonPaySummary from "@/Organisms/ButtonPaySummary";

export default function CreateTransaction({ auth, products }) {
    const header = <Sidebar></Sidebar>;

    const content = <Cart products={products} buttonSummary={false} />;

    const footer = (
        <>
            <PaymentMethod />

            <PaymentInfo />

            <Calculator />

            <ButtonPaySummary auth={auth} products={products} />
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
