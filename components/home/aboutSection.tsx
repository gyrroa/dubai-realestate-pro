"use client";

import { usePageStore } from "@/store/useAboutStore";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { cn } from "@/lib/utils";

import AboutImageCard from "./about/imageCard";
import AboutTextCard from "./about/textCard";
import Pagination from "./about/pagination";
import { about } from "@/messages/constants/data";

export default function AboutSection() {
    const t = useTranslations("About");
    const { currentPage, setTotal } = usePageStore();

    const pages = t.raw("pages");
    const activePage = pages[currentPage] || pages[0];

    useEffect(() => {
        setTotal(pages.length);
    }, [pages.length, setTotal]);

    const bounceTransition = {
        type: "spring",
        stiffness: 260,
        damping: 25,
        mass: 1,
    } as const;

    return (
        <section id="about" className={cn(
            "py-10 md:py-20 lg:py-30",
            "px-8 lg:px-46.5",
            "relative flex flex-col lg:flex-row h-full min-h-screen gap-5 "

        )}>
            <LayoutGroup>
                <div className="flex flex-col lg:flex-row w-full gap-5 grow">
                    {/* Column */}
                    {Object.entries(activePage.items).map(([columnKey, columnItems]: any, colIndex) => (
                        <motion.div
                            layout
                            key={columnKey}
                            transition={bounceTransition}
                            className={cn(
                                "flex flex-col w-full h-full gap-5",
                                colIndex === 0 ? "text-end" : colIndex === 1 ? "text-center" : "text-start"
                            )}
                        >
                            {/* Title Header */}
                            {colIndex === 0 && (
                                <motion.div
                                    layout
                                    layoutId="about-main-title"
                                    transition={bounceTransition}
                                    className={cn(
                                        "max-w-50 md:max-w-88.75",
                                        "flex flex-col font-serif italic font-bold z-50 gap-6 w-full self-center my-4 text-title-64 ")}
                                >
                                    {t.rich('title', {
                                        gold: (chunks) => <h1 className="tracking-[-3.84px] leading-3.75 md:leading-4.75 lg:leading-5.75 self-start text-accent">{chunks}</h1>,
                                        black: (chunks) => <h1 className="tracking-[-3.84px] leading-3.75 md:leading-4.75 lg:leading-5.75 self-end whitespace-nowrap">{chunks}</h1>
                                    })}
                                </motion.div>
                            )}

                            {/* Itemss */}
                            {columnItems.map((item: any, itemIndex: number) => {
                                const localData = about.find((a) => a.id === item.id);
                                const itemPath = `pages.${currentPage}.items.${columnKey}.${itemIndex}`;
                                return (
                                    <motion.div
                                        key={`${columnKey}-${itemIndex}`}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                        transition={bounceTransition}
                                        className={cn(
                                            "w-full",
                                            item.type === "image"
                                                ? "relative h-30 lg:h-full lg:flex-1"
                                                : "flex-none z-10"
                                        )}
                                    >
                                        {item.type === "image" ? (
                                            <AboutImageCard
                                                src={localData?.src}
                                                location={item.location}
                                                position={localData?.position}
                                            />
                                        ) : (
                                            <AboutTextCard
                                                titleKey={`${itemPath}.title`}
                                                descriptionKey={`${itemPath}.description`}
                                            />
                                        )}
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    ))}
                </div>
            </LayoutGroup>
            <Pagination />
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                {/* Left shadow */}
                <svg xmlns="http://www.w3.org/2000/svg" width="260" height="265" viewBox="0 0 260 265" fill="none" className="absolute bottom-15.5 left-20.75 -z-10">
                    <g opacity="0.5" filter="url(#filter0_f_264_780)">
                        <ellipse cx="130" cy="132.5" rx="70" ry="72.5" fill="#EFCB68" />
                        <path d="M130 60.5C168.367 60.5 199.5 92.7188 199.5 132.5C199.5 172.281 168.367 204.5 130 204.5C91.6326 204.5 60.5 172.281 60.5 132.5C60.5 92.7188 91.6326 60.5 130 60.5Z" stroke="black" />
                    </g>
                    <defs>
                        <filter id="filter0_f_264_780" x="0" y="0" width="260" height="265" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_264_780" />
                        </filter>
                    </defs>
                </svg>
                {/* Right shadow */}
                <svg xmlns="http://www.w3.org/2000/svg" width="207" height="210" viewBox="0 0 207 210" fill="none" className="absolute top-28.25 right-22 -z-10">
                    <g opacity="0.8" filter="url(#filter0_f_264_788)">
                        <ellipse cx="103.5" cy="105" rx="43.5" ry="45" fill="#EFCB68" />
                        <path d="M103.5 60.5C127.232 60.5 146.5 80.4072 146.5 105C146.5 129.593 127.232 149.5 103.5 149.5C79.7676 149.5 60.5 129.593 60.5 105C60.5 80.4072 79.7676 60.5 103.5 60.5Z" stroke="black" />
                    </g>
                    <defs>
                        <filter id="filter0_f_264_788" x="0" y="0" width="207" height="210" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_264_788" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </section >
    );
}