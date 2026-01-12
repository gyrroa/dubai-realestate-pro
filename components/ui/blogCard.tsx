"use client";

interface BlogCardProps {
    title: string;
    description: string;
}

export default function BlogCard({ title, description }: BlogCardProps) {
    return (
        <div className="relative flex flex-col text-start justify-end w-64 h-100 py-8 px-3.5 rounded-4xl text-glow bg-[url(/home/blog/placeholder.png)] bg-cover bg-center">
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/70 z-10 w-full h-full rounded-[30px]" />
            <div className="flex flex-col gap-2.5 relative z-20">
                <h2 className="text-2xl font-bold tracking-[-1.44px] leading-6">{title}</h2>
                <p className="text-lg tracking-[-1.08px] leading-5">{description}</p>
            </div>
        </div>
    );
}