"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
    motion,
    useMotionValue,
    animate,
    PanInfo,
} from "framer-motion";
import { developers } from "@/messages/constants/data";
import { Link } from "@/i18n/routing";

const AUTO_DELAY = 3000;
const DRAG_BUFFER = 50;

export default function PanoramaCarousel() {
    const locale = useLocale();
    const isArabic = locale === 'ar';
    const t = useTranslations("Hero.carousel");

    const carouselItems = [...developers, ...developers, ...developers];
    const baseCount = developers.length;

    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const itemWidthRef = useRef(0);
    const centerOffsetRef = useRef(0);

    const measureLayout = useCallback(() => {
        if (containerRef.current) {
            const firstItem = containerRef.current.children[0] as HTMLElement;
            if (firstItem) {
                const rect = firstItem.getBoundingClientRect();
                const _itemWidth = rect.width;

                // Exact center of the screen minus half the item
                const _centerOffset = (window.innerWidth / 2) - (_itemWidth / 2);
                // Update Refs instantly
                itemWidthRef.current = _itemWidth;
                centerOffsetRef.current = _centerOffset;

                return { _itemWidth, _centerOffset };
            }
        }
        return null;
    }, []);

    // Snap Logic
    const snapToIndex = useCallback((index: number, immediate = false) => {
        const width = itemWidthRef.current;
        const offset = centerOffsetRef.current;

        if (!width) return;

        const set1Width = width * baseCount;
        const targetX = (index * -width) - set1Width + offset;

        if (immediate) {
            x.set(targetX);
        } else {
            animate(x, targetX, {
                type: "spring",
                stiffness: 260,
                damping: 20,
                mass: 1,
                onComplete: () => {
                    // Reset to infinite loop positions seamlessly
                    if (index >= baseCount) {
                        setCurrentIndex(0);
                        x.set(-set1Width + offset);
                    } else if (index <= -1) {
                        const newIndex = baseCount - 1;
                        setCurrentIndex(newIndex);
                        x.set(((newIndex * -width) - set1Width) + offset);
                    } else {
                        setCurrentIndex(index);
                    }
                }
            });
        }
    }, [baseCount, x]);

    // Initial Setup & Resize Listener
    useEffect(() => {
        // Measure on mount
        const init = measureLayout();
        if (init) {
            const startX = init._centerOffset - (init._itemWidth * baseCount);
            x.set(startX);
        }

        // Handle Resize
        const handleResize = () => {
            measureLayout();
            // Force snap
            snapToIndex(currentIndex, true);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [measureLayout, baseCount, x, currentIndex, snapToIndex]);


    // Auto-play
    useEffect(() => {
        if (isDragging) return;

        const timer = setInterval(() => {
            const nextIndex = isArabic ? currentIndex - 1 : currentIndex + 1;
            snapToIndex(nextIndex);
            setCurrentIndex(nextIndex);
        }, AUTO_DELAY);

        return () => clearInterval(timer);
    }, [currentIndex, isDragging, snapToIndex, isArabic]);

    const handleDragEnd = (_: any, info: PanInfo) => {
        setTimeout(() => {
            setIsDragging(false);
        }, 50);

        const { offset, velocity } = info;
        let newIndex = currentIndex;

        if (offset.x > DRAG_BUFFER || velocity.x > 500) {
            newIndex = currentIndex - 1;
        } else if (offset.x < -DRAG_BUFFER || velocity.x < -500) {
            newIndex = currentIndex + 1;
        }

        snapToIndex(newIndex);
        setCurrentIndex(newIndex);
    };

    return (
        <div
            dir="ltr"
            className={cn(
                "w-full h-full overflow-hidden cursor-grab active:cursor-grabbing",
                "mask-[radial-gradient(ellipse_120%_25%_at_50%_0%,transparent_45%,#000_45.5%),radial-gradient(ellipse_120%_25%_at_50%_100%,transparent_45%,#000_45.5%)] mask-intersect",
            )}
        >
            <motion.div
                ref={containerRef}
                className="flex w-max h-full items-center"
                style={{ x }}
                drag="x"
                dragElastic={0.2}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
            >
                {carouselItems.map((item, index) => (
                    <Link
                        href="/503"
                        key={index}
                        className={cn(
                            "group px-3 lg:px-7 shrink-0",
                            "h-full w-auto aspect-2/3 lg:aspect-3/3",
                            "hover:opacity-95 text-glow hover:text-highlight transition-all duration-300 flex items-center",
                            isDragging ? "pointer-events-none" : ""
                        )}
                        draggable={false}
                    >
                        <div className="relative h-full w-full aspect-2/3 lg:aspect-3/3 rounded-2xl overflow-hidden select-none cursor-pointer">
                            <div className={cn(
                                "absolute inset-0 z-10 flex items-center justify-center"
                            )}>
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.6)_0%,transparent_20%)]" />
                                <h2 className="relative z-20 font-semibold text-desc-xl md:text-title-32 drop-shadow-[0_4px_4px_rgba(0,0,0,0.80)] tracking-[11.84px]">
                                    {t(`${item.id}.developer`)}
                                </h2>
                            </div>
                            <Image
                                src={item.imgSrc}
                                alt="Developer"
                                fill
                                quality={75}
                                sizes="(max-width: 768px) 80vw, 50vw"
                                className="object-cover object-top group-hover:scale-110 transition-all duration-700"
                                draggable={false}
                            />
                        </div>
                    </Link>
                ))}
            </motion.div >
        </div >
    );
}