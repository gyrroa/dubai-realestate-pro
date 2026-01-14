import { create } from "zustand";

interface PageStore {
    currentPage: number;
    totalPages: number;
    next: () => void;
    prev: () => void;
    setTotal: (n: number) => void;
}

export const usePageStore = create<PageStore>((set) => ({
    currentPage: 0,
    totalPages: 3,

    setTotal: (n) => set({ totalPages: n }),

    next: () =>
        set((state) => ({
            currentPage: (state.currentPage + 1) % state.totalPages,
        })),

    prev: () =>
        set((state) => ({
            currentPage: (state.currentPage - 1 + state.totalPages) % state.totalPages,
        })),
}));