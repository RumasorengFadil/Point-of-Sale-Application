import { create } from "zustand";

// UI Store (untuk toggle atau state UI lainnya)
const useUIStore = create((set) => ({
    showCart: false,
    setShowCart: (value) => set({ showCart: value }),
  }));
  
  export default useUIStore;