import { useTransactionCalculations } from "@/hooks/useTransactionCalculations ";
import { useCartDetails } from "@/hooks/useCartDetails";
import useCartStore from "@/store/useCartStore";
import { formatNumberWithDots } from "@/utils/formatNumberWithDots";
import { useForm } from "@inertiajs/react";
import usePaymentMethodStore from "@/store/usePaymentMethodStore";
import toastUtils from "@/utils/toastUtils";
import { useEffect } from "react";
import withLoading from "@/Components/WithLoading";
import ButtonCartSummary from "@/Components/Button/ButtonCartSummary";
import Overlay from "@/Components/Overlay";
import SpinnerWithLabel from "@/Components/SpinnerWithLabel/SpinnerWithLabel";

export default function ButtonPaySummary({ auth, products }) {
    const cart = useCartStore((state) => state.cart);
    const clearCart = useCartStore((state) => state.handleClearCart);
    const paymentMethod = usePaymentMethodStore((state) => state.paymentMethod);
    const { subtotal, discount, total, paidAmount, change } =
        useTransactionCalculations(products, cart);

    const { cartDetails } = useCartDetails(products, cart);
    const { post, reset, processing, setData } = useForm({
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
    }, [
        auth,
        subtotal,
        discount,
        total,
        paymentMethod,
        paidAmount,
        change,
        cartDetails,
    ]);

    const submitForm = (e) => {
        e.preventDefault();
        post(route("transaction.store"), {
            onSuccess: (response) => {
                reset();
                clearCart();
            },
            onError: (errors) => {
                toastUtils.showError(errors);
            },
        });
    };

    const BtnCartSummWithLoading = withLoading({ SpinnerWithLabel, Overlay })(
        ButtonCartSummary
    );

    return (
        <div className="px-4">
            <BtnCartSummWithLoading
                disabled={!cart.length}
                summary={formatNumberWithDots(total)}
                label="Bayar"
                onClick={(e) => submitForm(e)}
                isLoading={processing}
            />
        </div>
    );
}
