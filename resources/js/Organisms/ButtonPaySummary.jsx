import ButtonCartSummary from "@/Components/Button/ButtonCartSummary";
import { useTransactionCalculations } from "@/hooks/useTransactionCalculations ";
import { useCartDetails } from "@/hooks/useCartDetails";
import useCartStore from "@/store/useCartStore";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { useForm } from "@inertiajs/react";
import usePaymentMethodStore from "@/store/usePaymentMethodStore";
import toastUtils from "@/utils/toastUtils";
import { useEffect } from "react";

export default function ButtonPaySummary({ auth, products }) {
    const cart = useCartStore((state) => state.cart);
    const paymentMethod = usePaymentMethodStore((state) => state.paymentMethod);
    const { subtotal, discount, total, paidAmount, change } =
        useTransactionCalculations(products, cart);

    const { cartDetails } = useCartDetails(products, cart);
    const { post, reset, processing, progress, data, setData } = useForm({
        cashierId: auth.guard.name === "cashier" ? auth.user.id : null,
        userId: auth.guard.name === "web" ? auth.user.id : null,
        subtotal: subtotal,
        discount: discount,
        total: total,
        paymentMethod: paymentMethod,
        paidAmount: paidAmount,
        change: change,
        note: null,
        cartDetails: cartDetails,
    });

    useEffect(() => {
        setData({
            cashierId: auth.guard.name === "cashier" ? auth.user.id : null,
            userId: auth.guard.name === "web" ? auth.user.id : null,
            subtotal: subtotal,
            discount: discount,
            total: total,
            paymentMethod: paymentMethod,
            paidAmount: paidAmount,
            change: change,
            note: null,
            cartDetails: cartDetails,
        });
    }, [auth, subtotal, discount, total, paymentMethod, paidAmount, change, cartDetails]);

    const submitForm = (e) => {
        e.preventDefault();
        post(route("transaction.store"), {
            onSuccess: (response) => {
                console.log("berhasil");
            },
            onError: (errors) => {
                toastUtils.showError(errors);
                console.log(errors);
            },
        });
    };

    return (
        <div className="px-4">
            <ButtonCartSummary
                disabled={!cart.length}
                summary={formatNumberWithDots(total)}
                label="Bayar"
                onClick={(e) => submitForm(e)}
            />
        </div>
    );
}
