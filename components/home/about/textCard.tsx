"use client"

import { useTranslations } from "next-intl";

interface TextCardProps {
    titleKey: string;
    descriptionKey: string;
}

export default function AboutTextCard({ titleKey, descriptionKey }: TextCardProps) {
    const t = useTranslations("About");

    return (
        <div className="flex flex-col lg:gap-2.5 p-4.25 md:p-5.25 lg:p-6.25 bg-glow border border-accent rounded-[30px] shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            {/* Title */}
            <h2 className="text-title-32 font-bold font-serif italic leading-6 tracking-[-1.92px]">
                {t.rich(titleKey, {
                    gold: (chunks) => <span className="text-accent">{chunks}</span>,
                    black: (chunks) => <span className="text-black font-semibold">{chunks}</span>,
                })}
            </h2>

            {/* Description */}
            <p className="text-desc-xl font-light leading-5 tracking-[-1.2px]">
                {t.rich(descriptionKey, {
                    semi: (chunks) => <span className="font-semibold">{chunks}</span>,
                })}
            </p>
        </div>
    );
}