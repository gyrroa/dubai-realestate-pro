"use client";

import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ArticleCardProps {
    src: string;
    title: string;
    description: string;
}

export default function ArticleCard({ src, title, description }: ArticleCardProps) {
    return (
        <Link href={"/503"}>
            <div className={cn(
                "group hover:drop-shadow-2xl active:scale-95 hover:rotate-2",
                "transition-all duration-500 cursor-pointer",
                "relative flex flex-col text-start justify-end h-full min-h-40 pb-6 md:pb-7 lg:pb-8 px-2.5 md:px-3 lg:px-3.5 rounded-4xl text-glow select-none overflow-clip"
            )}>
                <Image
                    src={src}
                    alt={title}
                    fill
                    quality={75}
                    className="object-cover rounded-[30px] group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    draggable={false}
                    priority={false}
                    sizes="(max-width: 768px)"
                />
                <div className={cn(
                    "group-hover:opacity-50 transition-all duration-500",
                    "absolute inset-0 bg-linear-to-b from-transparent to-black/70 z-10 w-full h-full rounded-[30px]"
                )} />
                <div className="flex flex-col gap-0.5 md:gap-1.5 lg:gap-2.5 relative z-20">
                    <h2 className="text-title-2xl font-bold tracking-[-1.44px] leading-4 md:leading-5 lg:leading-6">{title}</h2>
                    <p className="text-desc-lg tracking-[-1.08px] leading-3 md:leading-4 lg:leading-5">{description}</p>
                </div>
            </div>
        </Link>

    );
}