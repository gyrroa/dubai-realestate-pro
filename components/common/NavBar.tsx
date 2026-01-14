"use client"

import Image from "next/image";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { useLenis } from "lenis/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useSmartScroll } from "@/hooks/useNavScroll";
import { useNavStore } from "@/store/useNavStore";
import { Menu, X } from "lucide-react";

export default function NavBar() {
    const t = useTranslations('Navigation');
    const scrollTo = useSmartScroll();
    const { isVisible, setIsVisible, isScrollingLocked } = useNavStore();
    const [isAtTop, setIsAtTop] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const lastScrollY = useRef(0);

    useLenis(({ scroll }) => {
        setIsAtTop(scroll < 50);
        if (isMobileMenuOpen && Math.abs(scroll - lastScrollY.current) > 10) {
            setIsMobileMenuOpen(false);
        }
        if (isScrollingLocked) {
            lastScrollY.current = scroll;
            return;
        }
        if (scroll > lastScrollY.current && scroll > 100) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }

        lastScrollY.current = scroll;
    }, [isMobileMenuOpen]);

    return (
        <nav className={cn(
            "w-full fixed z-100 ease-in-out transition-all duration-500",
            !isAtTop && "lg:scale-75",
            isMobileMenuOpen && "bg-glow shadow-2xl",
        )} >
            {/* Desktop menu */}
            <div className={cn("p-5 lg:py-10 flex justify-between lg:justify-around items-center transition-all duration-500",
                !isAtTop && "bg-glow/80 backdrop-blur-md rounded-[15px]",
                isVisible ? "translate-y-0" : "-translate-y-[150%]",
            )}>
                {/* Home */}
                <Button variant="nav" onClick={() => scrollTo("#hero")} className="hidden lg:flex">
                    {t('home')}
                </Button>
                {/* Developers */}
                <Button variant="nav" className="hidden lg:flex">
                    {t('developers')}
                </Button>
                {/* Logo Section */}
                <Button size={"flat"} className="flex px-4 py-2 items-center gap-1.5 select-none" onClick={() => scrollTo("#hero")}>
                    <Image width={60} height={90} alt="Logo" src="/logo.png" className="w-10 h-14 lg:w-15 lg:h-22.5" />
                    <div className="text-start font-bold flex flex-col font-serif gap-0 lg:gap-1">
                        {t.rich('logo', {
                            black: (chunks) => <span className="leading-4.75 lg:leading-5.75 text-title-4xl tracking-[-2.16px]">{chunks}</span>,
                            gold: (chunks) => <span className="leading-4.75 lg:leading-5.75 text-title-2xl text-accent font-serif tracking-[-1.44px]">{chunks}</span>,
                            i: (chunks) => <i>{chunks}</i>
                        })}
                    </div>
                </Button>
                {/* Articles */}
                <Button variant="nav" onClick={() => scrollTo("#articles")} className="hidden lg:flex">
                    {t('articles')}
                </Button>
                {/* Contact Us */}
                <Button variant="cta1" size={"cta1"} onClick={() => scrollTo("#contact")} className="hidden lg:flex text-title-30">
                    {t('contact_us')}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none" className="w-5 h-3.5 ml-2 rtl:rotate-180">
                        <path d="M19.5645 9.59241L12.4176 16.7393C11.8816 17.3199 10.9436 17.3199 10.4076 16.7393C9.82691 16.2032 9.82691 15.2652 10.4076 14.7292L15.0977 9.99442H1.42937C0.625349 9.99442 0 9.36907 0 8.56505C0 7.8057 0.625349 7.13568 1.42937 7.13568H15.0977L10.4076 2.44556C9.82691 1.90955 9.82691 0.971524 10.4076 0.435511C10.9436 -0.14517 11.8816 -0.14517 12.4176 0.435511L19.5645 7.58236C20.1452 8.11837 20.1452 9.05639 19.5645 9.59241Z" fill="#231D20" />
                    </svg>
                </Button>
                {/* Hamburger */}
                <Button size={"flat"} className="block lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                </Button>
            </div>
            {/* Mobile menu */}
            <div className={cn(
                "absolute right-0 w-fit p-5 flex flex-col lg:hidden bg-glow/80 backdrop-blur-md items-end gap-3 transition-all duration-300 rounded-bl-[15px]",
                !isMobileMenuOpen && "opacity-0 -translate-y-[150%] pointer-events-none"
            )}>
                {/* Home */}
                <Button variant="nav" onClick={() => scrollTo("#hero")} className="justify-end">
                    {t('home')}
                </Button>
                {/* Developers */}
                <Button variant="nav" className="justify-end">
                    {t('developers')}
                </Button>
                {/* Articles */}
                <Button variant="nav" onClick={() => scrollTo("#articles")} className="justify-end">
                    {t('articles')}
                </Button>
                {/* Contact Us */}
                <Button variant="cta1" size={"cta1"} onClick={() => scrollTo("#contact")} className="text-title-30">
                    {t('contact_us')}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none" className="w-5 h-3.5 ml-2 rtl:rotate-180">
                        <path d="M19.5645 9.59241L12.4176 16.7393C11.8816 17.3199 10.9436 17.3199 10.4076 16.7393C9.82691 16.2032 9.82691 15.2652 10.4076 14.7292L15.0977 9.99442H1.42937C0.625349 9.99442 0 9.36907 0 8.56505C0 7.8057 0.625349 7.13568 1.42937 7.13568H15.0977L10.4076 2.44556C9.82691 1.90955 9.82691 0.971524 10.4076 0.435511C10.9436 -0.14517 11.8816 -0.14517 12.4176 0.435511L19.5645 7.58236C20.1452 8.11837 20.1452 9.05639 19.5645 9.59241Z" fill="#231D20" />
                    </svg>
                </Button>
            </div>
        </nav >
    );
}