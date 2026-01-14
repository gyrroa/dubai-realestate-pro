import { useNavStore } from "@/store/useNavStore";
import { useLenis } from "lenis/react";

export const useSmartScroll = () => {
    const lenis = useLenis();
    const { setScrollingLocked } = useNavStore();

    const scrollTo = (target: string) => {
        if (!lenis) return;

        setScrollingLocked(true);

        lenis.scrollTo(target, {
            duration: 3,
            onComplete: () => {
                setTimeout(() => setScrollingLocked(false), 100);
            },
        });
    };

    return scrollTo;
};