"use client";

import { cn, richRenderers } from "@/lib/utils";
import { broker } from "@/messages/constants/data";
import Image from "next/image";

interface BrokerCardProps {
    index: number;
    reverse?: boolean;
    t: any;

}

export const PersonnelCard = ({ index, reverse, t }: BrokerCardProps) => {
    const data = broker[index];
    const personnelPath = `personnel.${index}`;

    return (
        <div className={cn(
            "flex gap-6.5 justify-center items-center flex-col lg:flex-row",
            reverse && "lg:items-start w-fit"
        )}>
            {/* Repeating Div: Profile & Image Container */}
            <div className={cn(
                "flex lg:flex-col size-fit items-center lg:-mt-35 -z-10 lg:z-10 w-full lg:w-auto pointer-events-none",
                reverse && "lg:order-last"
            )}>
                {/* Image Wrapper */}
                <div className="absolute flex lg:static w-full justify-end lg:justify-center -mb-34 -mt-4 left-0 px-8">
                    <Image
                        src={data.imgSrc}
                        width={600}
                        height={600}
                        quality={75}
                        alt="pres"
                        className="w-auto h-auto self-end lg:self-auto lg:w-(--broker-width)"
                        style={{
                            "--broker-width": `${data.width}px`
                        } as React.CSSProperties}
                        draggable={false}
                    />
                </div>

                {/* Content Card (Name & Position) */}
                <div className={cn(
                    "py-5.75 pb-17 md:py-6.75 lg:py-7.75",
                    "px-3 md:px-7 lg:px-8 ",
                    "gap-2.5 ",
                    "text-start lg:text-center lg:items-center w-3/4 lg:w-fit",
                    "relative flex flex-col lg:bg-glow rounded-[30px] lg:shadow-[0_0_10px_0_rgba(0,0,0,0.25)] lg:border border-accent",
                )}>
                    {/* Name */}
                    <h2 className="leading-7 md:leading-8 lg:leading-9 tracking-[-1.44px] text-title-48 font-serif italic font-bold">
                        {t.rich(`${personnelPath}.name`, richRenderers)}
                    </h2>
                    {/* Position */}
                    <p className="font-light text-title-2xl leading-5.25 md:leading-6.25 lg:leading-7.25 tracking-[-1.44px] lg:max-w-113.75 w-2/3 lg:w-full">
                        {t.rich(`${personnelPath}.position`, richRenderers)}
                    </p>

                    {/* Desktop Shadow (Conditional alignment) */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="260" height="265" viewBox="0 0 260 265" fill="none"
                        className={cn(
                            "absolute bottom-0 -z-10 pointer-events-none hidden lg:block",
                            reverse ? "-right-10" : "-left-25"
                        )}>
                        <g opacity="0.5" filter="url(#filter0_f_718_1870)">
                            <path d="M200 132.5C200 172.541 168.66 205 130 205C91.3401 205 60 172.541 60 132.5C60 92.4594 91.3401 60 130 60C168.66 60 200 92.4594 200 132.5Z" fill="#EFCB68" />
                            <path d="M130 60.5C168.367 60.5 199.5 92.7188 199.5 132.5C199.5 172.281 168.367 204.5 130 204.5C91.6326 204.5 60.5 172.281 60.5 132.5C60.5 92.7188 91.6326 60.5 130 60.5Z" stroke="black" />
                        </g>
                        <defs>
                            <filter id="filter0_f_718_1870" x="0" y="0" width="260" height="265" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_718_1870" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>

            {/* Bio Card */}
            <div className={cn(
                "py-8 md:py-9 lg:py-10",
                "px-6 md:px-7 lg:px-8",
                !reverse && "lg:bottom-16",
                "relative size-fit flex flex-col bg-glow rounded-[30px] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] border border-accent"
            )}>
                {/* Section Title (Only for index 0) */}
                {index === 0 && (
                    <h1 className="lg:-left-24 leading-16.75 absolute text-title-100 font-serif italic font-bold -top-12 tracking-[-6px] whitespace-nowrap text-center lg:text-left self-center">
                        {t.rich(`${personnelPath}.title`, richRenderers)}
                    </h1>
                )}

                <p className="font-light text-title-2xl leading-5.5 md:leading-6.5 lg:leading-7.5 tracking-[-1.44px] lg:max-w-119">
                    {t.rich(`${personnelPath}.description`, richRenderers)}
                </p>

                {/* Mobile shadow / Decorative SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="303" height="309" viewBox="0 0 303 309" fill="none"
                    className={cn(
                        "absolute -z-20 pointer-events-none",
                        reverse ? "block bottom-0 md:bottom-10 right-0 lg:hidden" : "ltr:-right-35 rtl:right-35 bottom-0 md:bottom-10 lg:bottom-20"
                    )}>
                    <g opacity="0.41" filter="url(#filter0_f_718_1868)">
                        <path d="M243 154.5C243 206.691 202.034 249 151.5 249C100.966 249 60 206.691 60 154.5C60 102.309 100.966 60 151.5 60C202.034 60 243 102.309 243 154.5Z" fill="#EFCB68" />
                        <path d="M151.5 60.5C201.743 60.5 242.5 102.57 242.5 154.5C242.5 206.43 201.743 248.5 151.5 248.5C101.257 248.5 60.5 206.43 60.5 154.5C60.5 102.57 101.257 60.5 151.5 60.5Z" stroke="black" />
                    </g>
                    <defs>
                        <filter id="filter0_f_718_1868" x="0" y="0" width="303" height="309" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_718_1868" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
};