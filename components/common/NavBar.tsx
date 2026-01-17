"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { useSmartScroll } from "@/hooks/useNavScroll";
import { useNavStore } from "@/store/useNavStore";
import { Menu, X } from "lucide-react";
import { usePathname } from "@/i18n/routing";
import { navigation } from "@/messages/constants/data";
import { DeveloperSubMenu } from "./devSubMenu";
import { NavItem } from "./navMenuItem";

export default function NavBar() {
    const t = useTranslations('Navigation');
    const scrollTo = useSmartScroll();
    const pathname = usePathname();
    const { isVisible, setIsVisible, isScrollingLocked } = useNavStore();

    // State
    const [isAtTop, setIsAtTop] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#home");

    // Developer Menu State
    const [isDeveloperMenuOpen, setIsDeveloperMenuOpen] = useState(false);
    const [isDeveloperMenuHover, setIsDeveloperMenuHover] = useState(false);
    const [isMobileDeveloperMenuOpen, setIsMobileDeveloperMenuOpen] = useState(false);

    const lastScrollY = useRef(0);
    const navRef = useRef<HTMLDivElement>(null);

    // Memoized Menu Items
    const menuItems = useMemo(() => t.raw('menu') as { id: string; title: string }[], [t]);

    // --- Effects ---

    // Intersection observer for active hash
    useEffect(() => {
        if (typeof window === "undefined") return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries.find((entry) => entry.isIntersecting);
                if (visibleEntry) {
                    const hash = `#${visibleEntry.target.id}`;
                    setActiveSection(hash);
                    window.history.replaceState(null, '', `${window.location.pathname}${hash}`);
                }
            },
            { rootMargin: "-25% 0px -70% 0px", threshold: 0 }
        );

        navigation.forEach((nav) => {
            const id = nav.section?.replace("#", "");
            if (id) {
                const el = document.getElementById(id);
                if (el) observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, [pathname]);

    // Lenis scroll logic
    useLenis(({ scroll }) => {
        setIsAtTop(scroll < 50);

        // Reset to home if at top
        if (scroll < 100 && activeSection !== "#home") {
            setActiveSection("#home");
            window.history.replaceState(null, '', `${window.location.pathname}#home`);
        }

        // Close menus on scroll
        if ((isMobileMenuOpen || isDeveloperMenuOpen || isMobileDeveloperMenuOpen) && Math.abs(scroll - lastScrollY.current) > 10) {
            setIsMobileMenuOpen(false);
            setIsDeveloperMenuOpen(false);
            setIsMobileDeveloperMenuOpen(false);
        }

        // Visibility toggle
        if (!isScrollingLocked) {
            if (scroll > lastScrollY.current && scroll > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        }
        lastScrollY.current = scroll;
    }, [isMobileMenuOpen, isDeveloperMenuOpen, activeSection, pathname, isScrollingLocked]);

    // Click outside listener
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsDeveloperMenuOpen(false);
                setIsMobileDeveloperMenuOpen(false);
                setIsMobileMenuOpen(false);
            }
        };

        if (isDeveloperMenuOpen || isMobileMenuOpen || isMobileDeveloperMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isDeveloperMenuOpen, isMobileMenuOpen, isMobileDeveloperMenuOpen]);

    // --- Handlers ---

    const handleLogoClick = () => {
        setActiveSection("#home");
        scrollTo("#home");
        window.history.pushState(null, '', `${window.location.pathname}#home`);
    };

    const handleNavClick = (e: React.MouseEvent, config: typeof navigation[number], isMobile: boolean) => {
        const isDeveloper = config.type === "nav2";

        if (isDeveloper) {
            e.preventDefault();
            if (isMobile) {
                setIsMobileMenuOpen(!isMobileMenuOpen); // Keep parent open? usually you want to toggle sub
                setIsMobileDeveloperMenuOpen(!isMobileDeveloperMenuOpen);
            } else {
                setIsDeveloperMenuOpen(!isDeveloperMenuOpen);
            }
            return;
        }

        if (pathname === `/` && config.section) {
            e.preventDefault();
            setActiveSection(config.section);
            window.history.pushState(null, '', `${window.location.pathname}${config.section}`);
            scrollTo(config.section);
            if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav ref={navRef} className="flex w-full fixed z-100">
            <div className={cn(
                "w-full ease-in-out transition-all duration-500",
                isVisible ? "translate-y-0" : "-translate-y-[150%]",
            )}>
                <div className={cn(
                    "px-10 xl:px-20 py-5 xl:py-10",
                    "flex w-full justify-between transition-all duration-500",
                    !isAtTop && "xl:scale-85 xl:px-12.5 xl:py-5",
                )}>
                    {/* Background Glow */}
                    <div className={cn(
                        `${isAtTop && "opacity-0"} transition-all duration-500 absolute border-glow/85 inset-0 bg-glow/80 xl:rounded-[60px] border-3 backdrop-blur-[10px] -z-10`,
                        (isMobileMenuOpen || isMobileDeveloperMenuOpen) && `opacity-100 xl:opacity-0`,
                    )} />

                    {/* Logo Section */}
                    <Button size="flat" className="flex items-center gap-1.5 select-none" onClick={handleLogoClick}>
                        <Image width={60} height={90} alt="Logo" src="/logo.png" className="w-10 h-14 xl:w-15 xl:h-22.5" />
                        <div className="text-start font-bold flex flex-col font-serif gap-0 xl:gap-1 leading-3.75 md:leading-4.75 xl:leading-5.75">
                            {t.rich('logo', {
                                black: (chunks) => <span className="text-title-4xl tracking-[-2.16px]">{chunks}</span>,
                                gold: (chunks) => <span className="text-title-2xl text-accent font-serif tracking-[-1.44px]">{chunks}</span>,
                                i: (chunks) => <i>{chunks}</i>
                            })}
                        </div>
                    </Button>

                    {/* Desktop Menu */}
                    <div className="flex justify-between xl:justify-around items-center transition-all duration-500 gap-12.5">
                        {menuItems.map((menuItem) => {
                            const config = navigation.find((nav) => nav.id === menuItem.id);
                            if (!config) return null;
                            const isDeveloper = config.type === "nav2";

                            return (
                                <NavItem
                                    key={menuItem.id}
                                    title={menuItem.title}
                                    config={config}
                                    isActive={activeSection === config.section}
                                    isDeveloperOpen={isDeveloperMenuOpen}
                                    className="hidden xl:flex"
                                    onClick={(e, c) => handleNavClick(e, c, false)}
                                    onMouseEnter={() => isDeveloper && setIsDeveloperMenuHover(true)}
                                    onMouseLeave={() => isDeveloper && setIsDeveloperMenuHover(false)}
                                >
                                    {isDeveloper && (
                                        <DeveloperSubMenu
                                            isOpen={isDeveloperMenuOpen || isDeveloperMenuHover}
                                            isAtTop={isAtTop}
                                            data={t.raw('devSubMenu')}
                                            onClose={() => {
                                                setIsDeveloperMenuOpen(false);
                                                setIsDeveloperMenuHover(false);
                                            }}
                                        />
                                    )}
                                </NavItem>
                            );
                        })}
                    </div>

                    {/* Hamburger Toggle */}
                    <Button
                        size="flat"
                        className="block xl:hidden"
                        onClick={() => {
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                            setIsMobileDeveloperMenuOpen(false);
                        }}
                    >
                        {(isMobileMenuOpen || isMobileDeveloperMenuOpen) ? <X className="size-6" /> : <Menu className="size-6" />}
                    </Button>
                </div>

                {/* Mobile Menu Container */}
                <div className={cn(
                    "xl:hidden absolute right-0",
                    "backdrop-blur-[10px] rounded-bl-[30px] xl:rounded-[30px] bg-glow/80 border-b-2 border-l-2 xl:border-2 border-glow",
                    "w-fit p-5 flex flex-col items-end gap-3 transition-all duration-500",
                    !isMobileMenuOpen && "opacity-0 -translate-y-[150%] pointer-events-none"
                )}>
                    {menuItems.map((menuItem) => {
                        const config = navigation.find((nav) => nav.id === menuItem.id);
                        if (!config) return null;

                        return (
                            <NavItem
                                key={menuItem.id}
                                title={menuItem.title}
                                config={config}
                                isActive={activeSection === config.section}
                                isDeveloperOpen={isMobileDeveloperMenuOpen}
                                className="justify-end"
                                onClick={(e, c) => handleNavClick(e, c, true)}
                            />
                        );
                    })}
                </div>

                {/* Mobile Developer Submenu */}
                <div className="relative xl:hidden">
                    <DeveloperSubMenu
                        isOpen={isMobileDeveloperMenuOpen}
                        isAtTop={isAtTop}
                        data={t.raw('devSubMenu')}
                        onClose={() => setIsMobileDeveloperMenuOpen(false)}
                    />
                </div>
            </div>
        </nav>
    );
}