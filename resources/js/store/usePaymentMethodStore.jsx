import { create } from "zustand";

const usePaymentMethodStore = create((set) => ({
    paymentMethod: "cash",
    setPaymentMethod: (paymentMethod) => set({ paymentMethod }),
}));

export default usePaymentMethodStore;