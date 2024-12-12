import { create } from "zustand";

const useCategoryStore = create((set) => ({
    category: "makanan",
    setCategory: (category) => set({ category }),
  }));
  

  export default useCategoryStore;