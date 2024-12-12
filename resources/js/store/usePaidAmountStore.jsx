import { create } from "zustand";

const usePaidAmountStore = create((set) => ({
    paidAmount: "",
    setPaidAmount: (paidAmount) => set({ paidAmount }),
}));

export default usePaidAmountStore;
