"use client";

import Image from "next/image";

interface ArticleCardProps {
    title: string;
    description: string;
}

export default function ArticleCard({ title, description }: ArticleCardProps) {
    return (
        <div className="relative flex flex-col text-start justify-end h-full min-h-100 py-8 px-3.5 rounded-4xl text-glow">
            <Image
                src={"/home/blog/placeholder.png"}
                alt={title}
                fill
                quality={90}
                className="object-cover rounded-[30px]"
                draggable={false}
                priority={false}
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/70 z-10 w-full h-full rounded-[30px]" />
            <div className="flex flex-col gap-2.5 relative z-20">
                <h2 className="text-title-2xl font-bold tracking-[-1.44px] leading-6">{title}</h2>
                <p className="text-desc-lg tracking-[-1.08px] leading-5">{description}</p>
            </div>
        </div>
    );
}