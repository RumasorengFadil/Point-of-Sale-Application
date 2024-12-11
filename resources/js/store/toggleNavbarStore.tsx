import { create } from "zustand";

interface Store {
  toggleNavbar: boolean;
  setToggleNavbar: () => void;
}

const toggleNavbarStore = create<Store>((set) => ({
  toggleNavbar: false,
  setToggleNavbar: () => set((state) => ({ toggleNavbar: !state.toggleNavbar })),
}));

export default toggleNavbarStore;