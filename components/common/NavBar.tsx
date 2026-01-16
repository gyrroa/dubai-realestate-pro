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
import { Link, usePathname } from "@/i18n/routing";
import { navigation } from "@/messages/constants/data";

export default function NavBar() {
    const t = useTranslations('Navigation');
    const scrollTo = useSmartScroll();
    const pathname = usePathname();
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
            "flex w-full fixed z-100 ease-in-out transition-all duration-500",
            isMobileMenuOpen && "bg-glow shadow-2xl",
            isVisible ? "translate-y-0" : "-translate-y-[150%]",
        )} >
            <div className={cn(
                "px-10 xl:px-20",
                "py-5 xl:py-10",
                "flex w-full justify-between transition-all duration-500 border-glow/85",
                !isAtTop && "xl:scale-85 xl:px-12.5 xl:py-5 bg-glow/80 backdrop-blur-[10px] xl:rounded-[60px] xl:border-3",
            )}>
                {/* Logo Section */}
                <Button size={"flat"} className="flex items-center gap-1.5 select-none" onClick={() => scrollTo("#home")}>
                    <Image width={60} height={90} alt="Logo" src="/logo.png" className="w-10 h-14 xl:w-15 xl:h-22.5" />
                    <div className="
                        text-start font-bold flex flex-col font-serif 
                        gap-0 xl:gap-1 
                        leading-3.75 md:leading-4.75 xl:leading-5.75 
                    ">
                        {t.rich('logo', {
                            black: (chunks) => <span className="text-title-4xl tracking-[-2.16px]">{chunks}</span>,
                            gold: (chunks) => <span className="text-title-2xl text-accent font-serif tracking-[-1.44px]">{chunks}</span>,
                            i: (chunks) => <i>{chunks}</i>
                        })}
                    </div>
                </Button>

                {/* Desktop menu */}
                <div className="flex justify-between xl:justify-around items-center transition-all duration-500 gap-12.5">
                    {t.raw('menu').map((menuItem: { id: string; title: string }) => {
                        const config = navigation.find((nav) => nav.id === menuItem.id);
                        if (!config) return null;
                        const isContact = menuItem.id === "n4";

                        return (
                            <Button
                                key={menuItem.id}
                                asChild
                                variant={isContact ? "cta1" : "nav"}
                                size={isContact ? "cta1" : "flat"}
                                className={cn(
                                    "hidden xl:flex",
                                    isContact ? "text-title-30 " : ""
                                )}
                            >
                                <Link
                                    href={config.href}
                                    onClick={(e) => {
                                        if (pathname === `/` && config.section) {
                                            e.preventDefault();
                                            scrollTo(config.section);
                                        }
                                    }}
                                >
                                    {menuItem.title}

                                    {!isContact ? (
                                        // Underline
                                        <hr className="bottom-0 w-0 h-0.5 group-active:h-1 bg-foreground group-hover:bg-accent group-hover:w-full absolute transition-all duration-500" />
                                    ) : (
                                        // Arrow
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none" className="w-5 h-3.5 ml-2 rtl:rotate-180">
                                            <path d="M19.5645 9.59241L12.4176 16.7393C11.8816 17.3199 10.9436 17.3199 10.4076 16.7393C9.82691 16.2032 9.82691 15.2652 10.4076 14.7292L15.0977 9.99442H1.42937C0.625349 9.99442 0 9.36907 0 8.56505C0 7.8057 0.625349 7.13568 1.42937 7.13568H15.0977L10.4076 2.44556C9.82691 1.90955 9.82691 0.971524 10.4076 0.435511C10.9436 -0.14517 11.8816 -0.14517 12.4176 0.435511L19.5645 7.58236C20.1452 8.11837 20.1452 9.05639 19.5645 9.59241Z" fill="#231D20" />
                                        </svg>
                                    )}
                                </Link>
                            </Button>
                        );
                    })}
                </div>
                {/* Hamburger */}
                <Button size={"flat"} className="block xl:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                </Button>
            </div>
            {/* Mobile Menu */}
            <div className={
                cn(
                    "absolute right-0 mt-24",
                    "w-fit p-5 flex flex-col xl:hidden bg-glow backdrop-blur-md items-end gap-3 transition-all duration-500 rounded-bl-[15px]",
                    !isMobileMenuOpen && "opacity-0 -translate-y-[150%] pointer-events-none"
                )
            }>
                {t.raw('menu').map((menuItem: { id: string; title: string }) => {
                    const config = navigation.find((nav) => nav.id === menuItem.id);
                    if (!config) return null;
                    const isContact = menuItem.id === "n4";

                    return (
                        <Button
                            key={menuItem.id}
                            asChild
                            variant={isContact ? "cta1" : "nav"}
                            size={isContact ? "cta1" : "flat"}
                            className={cn(
                                "justify-end",
                                isContact ? "text-title-30 " : ""
                            )}
                        >
                            <Link
                                href={config.href}
                                onClick={(e) => {
                                    if (pathname === `/` && config.section) {
                                        e.preventDefault();
                                        scrollTo(config.section);
                                    }
                                }}
                            >
                                {menuItem.title}

                                {!isContact ? (
                                    // Underline
                                    <hr className="bottom-0 w-0 h-0.5 group-active:h-1 bg-foreground group-hover:bg-accent group-hover:w-full absolute transition-all duration-500" />
                                ) : (
                                    // Arrow
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none" className="w-5 h-3.5 ml-2 rtl:rotate-180">
                                        <path d="M19.5645 9.59241L12.4176 16.7393C11.8816 17.3199 10.9436 17.3199 10.4076 16.7393C9.82691 16.2032 9.82691 15.2652 10.4076 14.7292L15.0977 9.99442H1.42937C0.625349 9.99442 0 9.36907 0 8.56505C0 7.8057 0.625349 7.13568 1.42937 7.13568H15.0977L10.4076 2.44556C9.82691 1.90955 9.82691 0.971524 10.4076 0.435511C10.9436 -0.14517 11.8816 -0.14517 12.4176 0.435511L19.5645 7.58236C20.1452 8.11837 20.1452 9.05639 19.5645 9.59241Z" fill="#231D20" />
                                    </svg>
                                )}
                            </Link>
                        </Button>
                    );
                })}
            </div>
        </nav>
    );
}