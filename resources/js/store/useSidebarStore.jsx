import { create } from "zustand";

// UI Store (untuk toggle atau state UI lainnya)
const useSidebarStore = create((set) => ({
    showSidebar: false,
    setShowSidebar: (value) => set({ showSidebar: value }),
  }));
  
  export default useSidebarStore;