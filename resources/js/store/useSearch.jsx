import { create } from "zustand";

const useSearch = create((set) => ({
    searchResult: [],
    setSearchResult: (searchResult) => set({ searchResult }),
}));

export default useSearch;