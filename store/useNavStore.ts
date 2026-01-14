import { create } from "zustand";

interface NavState {
    isVisible: boolean;
    isScrollingLocked: boolean;
    setIsVisible: (visible: boolean) => void;
    setScrollingLocked: (locked: boolean) => void;
}

export const useNavStore = create<NavState>((set) => ({
    isVisible: true,
    isScrollingLocked: false,
    setIsVisible: (visible) => set({ isVisible: visible }),
    setScrollingLocked: (locked) => set({ isScrollingLocked: locked }),
}));