import { create } from "zustand";

const useCategoryStore = create((set) => ({
    category: "Makanan",
    setCategory: (category) => set({ category }),
}));

export default useCategoryStore;