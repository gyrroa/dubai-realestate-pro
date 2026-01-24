"use client";

import { useParams } from "next/navigation";
import { navigation } from "@/messages/constants/data";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

export default function AboutSection() {
    const params = useParams();
    const slug = params.developer as string;
    const config = navigation[slug];
    const developerName = slug?.replaceAll('-', ' ');

    if (!config) return <div className="pt-40 text-center text-accent">Developer not found</div>;

    const [isWide, setIsWide] = useState(false);
    const [isTall, setIsTall] = useState(false);

    const handleToggle = () => {
        if (!isWide) {
            // Expand width
            setIsWide(true);
            // Height waits
        } else {
            // Collapse Height
            setIsTall(false);
            // Width waits
        }
    };

    return (
        <section className="relative text-center flex flex-col flex-1 min-h-screen items-center justify-center px-10">
            {/* Background Image */}
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat h-[85vh] top-[15vh]"
                style={{
                    backgroundImage: `url('/developer/azizi.jpg')`,
                    maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
                }}
            />

            {/* Container */}
            <motion.div
                initial={{ maxWidth: "485px" }}
                animate={{ maxWidth: isWide ? "1200px" : "485px" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="p-7.5 border-2 border-accent size-fit rounded-[30px] bg-glow/80 backdrop-blur-[10px] mx-auto overflow-hidden"
                onAnimationComplete={() => {
                    if (isWide) {
                        setIsTall(true);
                    } else {
                    }
                }}
            >
                {/* Logo */}
                <div className="w-fit h-fit mx-auto bg-glow rounded-full px-3.75 py-1.25 border border-accent shadow-[0_0_10px_0_rgba(35,29,32,0.25)]">
                    <div
                        className="w-16 md:w-32 h-6 md:h-12 bg-accent"
                        style={{
                            maskImage: `url(${config.image})`,
                            WebkitMaskImage: `url(${config.image})`,
                            maskSize: "contain",
                            maskRepeat: "no-repeat",
                            maskPosition: "center",
                        }}
                    />
                </div>

                <h1 className="text-title-64 font-bold font-serif italic text-accent mt-1.25 whitespace-nowrap">
                    {developerName}
                </h1>

                {/* Description */}
                <motion.div
                    initial={{ maxHeight: "180px" }}
                    animate={{ maxHeight: isTall ? "1000px" : "185px" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                    onAnimationComplete={() => {
                        if (!isTall && isWide) {
                            setIsWide(false);
                        }
                    }}
                >
                    <p className="text-justify font-light text-desc-lg tracking-[-1.2px] line-clamp-none">
                        At Azizi, we believe in not just crafting beautiful homes, but beyond that, we are here to enrich the lives of people. To date, we have successfully delivered over 45,000+ homes across prime residential and commercial destinations. We currently have around 150,000 units under construction, valued at several tens of billions of US dollars.
                        We are renowned for developing the world's second-tallest skyscraper, Burj Azizi, as well as the master-planned communities of Azizi Riviera, Azizi Venice, and Azizi Milan, among various other world-class projects across MBR City, Palm Jumeirah, Sheikh Zayed Road, Dubai Healthcare City, Dubai South, Dubailand, Al Furjan, Studio City, Sports City, and Downtown Jebel Ali.
                        We have embarked on an extraordinary journey into hospitality, launching 50 stunning 5-star hotels and an iconic 7-star masterpiece, alongside other awe-inspiring tourist and leisurely attractions.
                        Our global expansion is well underway, with landmark projects already completed — and groundbreaking developments upcoming — across Germany, France, London, the USA, Australia, Canada, and beyond.
                        Proudly shaping the future, we create vibrant communities that set new standards of living, elevate lifestyles, and leave a lasting legacy for generations to come.
                    </p>
                </motion.div>

                <Button
                    variant={"cta2"}
                    size={"cta2"}
                    className="text-desc-xl mt-5"
                    onClick={handleToggle}
                >
                    {isWide ? "View Less" : "View More"}
                </Button>

                <div className="flex justify-center mt-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none"
                        className={cn(
                            isWide ? "rotate-180" : "rotate-0",
                            "duration-500 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                        )}>
                        <path d="M19.4726 11.7295C20.4153 12.6596 20.4068 14.2063 19.4453 15.124L19.4462 15.125L12.2997 22.2715V22.2705C11.373 23.2421 9.80288 23.2417 8.87592 22.2705L8.87494 22.2715L1.72846 15.125L1.72943 15.124C0.767915 14.2063 0.759398 12.6596 1.70209 11.7295H1.70111C1.70626 11.7239 1.71252 11.7194 1.71771 11.7139C1.73123 11.7008 1.74288 11.6857 1.75678 11.6729L1.75873 11.6738C2.6878 10.7331 4.23148 10.7395 5.14935 11.6973L8.1806 14.7002V3.42969C8.1806 2.07351 9.25319 1.0002 10.6093 1C11.9006 1 13.039 2.05322 13.039 3.42969V14.6836L16.0224 11.7002H16.0234C16.9409 10.74 18.4861 10.7323 19.416 11.6738L19.4179 11.6729C19.4318 11.6857 19.4435 11.7008 19.457 11.7139C19.4622 11.7194 19.4684 11.7239 19.4736 11.7295H19.4726Z" fill="#897444" stroke="#FFFFFE" strokeWidth="2" />
                    </svg>
                </div>
            </motion.div>
        </section>
    );
}