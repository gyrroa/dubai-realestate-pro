"use client"

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { PersonnelCard } from "./broker/personell";

export default function BrokerSection() {
    const t = useTranslations("Broker");

    return (
        <section id="broker" className={cn(
            "pb-30 lg:pb-6",
            "gap-7.5 md:8.5 lg:gap-9.5",
            "flex flex-col px-8 lg:px-30 items-center overflow-x-clip"
        )}>
            {/* President Card */}
            <PersonnelCard index={0} t={t} />

            {/* Separator */}
            <hr className="border-0 h-px bg-accent opacity-20 w-full lg:hidden block" />

            {/* Vice President Card */}
            <PersonnelCard index={1} reverse t={t} />
        </section>
    );
}