"use client"

import { useTranslations } from "next-intl";
import Image from "next/image";

interface TextCardProps {
    logo: string;
    titleKey: string;
    descriptionKey: string;
}

export default function WhyCard({ titleKey, descriptionKey, logo }: TextCardProps) {
    const t = useTranslations("Why");

    return (
        <div className="flex flex-col px-12 py-7.5 bg-glow border border-accent rounded-[30px] items-center shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            {/* Logo */}
            <div className="relative flex-1 rounded-[30px] p-5 w-fit shadow-[0_0_5px_rgba(0,0,0,0.50),0_0_50px_var(--highlight)]">
                <Image
                    src={logo}
                    alt={logo}
                    width={40}
                    height={40}
                    unoptimized
                />
                {/* shadow */}
            </div>
            {/* Title */}
            <h2 className="text-title-64 font-bold font-serif italic leading-16.75 tracking-[-3.84px]">
                {t.rich(titleKey, {
                    gold: (chunks) => <span className="text-accent">{chunks}</span>,
                })}
            </h2>

            {/* Description */}
            <p className="text-desc-xl font-light leading-5 tracking-[-1.26px]">
                {t.rich(descriptionKey, {
                    semi: (chunks) => <span className="font-semibold">{chunks}</span>,
                })}
            </p>
        </div>
    );
}