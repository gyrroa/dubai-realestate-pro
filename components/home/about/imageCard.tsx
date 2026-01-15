import { GoldSkeleton } from "@/components/ui/shimmer";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function AboutImageCard({ src, location, position }: { src: any; location: string; position: any }) {
    const vertical = position.startsWith("top") ? "top-3.75" : "bottom-3.75";
    const horizontal = position.endsWith("left") ? "lg:start-3.75 lg:translate-x-0" : "lg:end-3.75 lg:translate-x-0";

    // Handle object following cursor
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - (left + width / 2)) * 0.15;
        const y = (e.clientY - (top + height / 2)) * 0.15;

        e.currentTarget.style.setProperty('--x', `${x}px`);
        e.currentTarget.style.setProperty('--y', `${y}px`);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.setProperty('--x', '0px');
        e.currentTarget.style.setProperty('--y', '0px');
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "group transition-all duration-500 relative size-full overflow-hidden rounded-[30px] select-none cursor-crosshair",
                "[--x:0px] [--y:0px]"
            )}>
            {/* Shining Shimmering Splendid */}
            <GoldSkeleton className="absolute inset-0 z-20 h-full w-full pointer-events-none" />
            {/* Background photo */}

            <div className="absolute inset-[-15%] transition-transform duration-700 ease-out"
                style={{ transform: 'translate(var(--x), var(--y))' }}>
                <Image
                    src={src}
                    alt={location}
                    fill
                    className="object-cover transition-all duration-500 ease-out"
                    draggable={false}
                    quality={75}
                    sizes="(max-width: 768px)"
                />
            </div>
            {/* Inner shadow */}
            <div className="absolute inset-0 rounded-[30px] shadow-[inset_0_0_10px_10px_rgba(0,0,0,0.25)] pointer-events-none" />

            {/* Label */}
            <Link
                href={"/503"}
                className={cn(
                    "absolute flex items-center gap-1 w-max py-1.5 px-2.5",
                    position.endsWith("left") ? "start-1/2 -translate-x-1/2" : "end-1/2 translate-x-1/2",
                    "hover:bg-glow hover:shadow-[0_0_9.2px_var(--accent)] active:translate-x-0.5 rtl:active:-translate-x-0.5 transition-all duration-300",
                    "cursor-pointer",
                    vertical,
                    horizontal,
                    "bg-glow/80 backdrop-blur-[1px] rounded-full font-light text-desc-xs border border-glow/80 z-20"
                )}>
                📍{location}
                <ChevronRight
                    className={cn(
                        "rtl:rotate-180",
                        "size-[clamp(0.46rem,0.28rem+0.75vw,0.75rem)] transition-all duration-500 ease-in-out",
                        "lg:opacity-0 lg:w-0 lg:-translate-x-2 lg:pointer-events-none",
                        "lg:group-hover:opacity-100 lg:group-hover:w-[clamp(0.46rem,0.28rem+0.75vw,0.75rem)] lg:group-hover:translate-x-0 lg:group-hover:pointer-events-auto"
                    )}
                />
            </Link>
        </div >
    );
}