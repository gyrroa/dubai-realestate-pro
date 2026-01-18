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
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,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q6DSs6ug0M6ugqs6ugommg7iaaoommg0M6ug0M6ug0azqg1q6yCNausmg3prOroNarOmg0us6aDWrrOroLq6zpoNaus6aDWms6aDWmppoLpqamg1prOmgumpqaC6ampoLqammgammpoGoaloFZpaloFZq2s0Cs2rWaCWpaVmgWsWrWaCWs2raxaBaxatrFoJaxatrHVEZ6rj3W+q490GbdQBQAAAAAAAAAAAAAFldea4t83Eaj0StyuPNdJQdZWpXOVqUR0lalc5WpVG5WpWJWoDUrWsSroN6usaug3prOroNausaug1prOroLpqaaDvpqaagurrOmg1prOroNaazq6DWms6ug1q6zpqjWrrOroNaazq6DWrrOmg1q6zpoNaus6aI1q6zpoNaazq6DWms6aDWms6aDWms6aDWpqamg1qammgupqaaC6mpqaC6mpqaC6mpqaC2pampaBalqWpaBazaWpaBazaWs2gWs2lrNoJazatrFoJaxa1a52glrn1Wuq5dVBnuuV+r1dZUAAAAAAAAAAAAAAAAFiAsdOa681wjfNRp3lblcea6SqjrK1K5Styg3K1K5ytSiNytSsSroN6usaug3prOroNausaug1prOroLpqaaDvprOmoNaus6aDWms6ug1prOroNaazq6DWms6ug1q6xq6Dems6aDems6ug1q6xq6DWrrGroNaazq6DWms6ao1prOmiNaazpoNaazpoNaazpoLprOmgums6aC6mpqaDWpqamgupqamgWpalqWgtrNpazaC2s2lrNoFrNpazaBazaWs2gWsWraxaipaxatrn1QTquPfTXfTlaCAKgAAAAAAAAAAAAAAAAACxqMNRGpXTnp0lcI3z0rTvK1K5StyiOkrUrnK1KI6SrKxKsoN6usaug3q6xq6Dems6aDems6aDWms6aI9Gms6aitaazpoN6azpoNaus6aI1q6zpoNaus6aDems6aDerrGroNausaug1q6xq6DWrrGroNausaug1prOmg3prOmg1prOmg1qammgums6aDWpqamg1qampoLpqamiLqampoLqampoq2s2lqWgWpalqWgWs2lqWgWs2lrNoFrFpazaBaxaWsWgnVc+ul66curqKz1dZWo0lABAAAAAAAAAAAAAAAAAABUAaixmLEblbldJ04ytStNO8rUrjOm5RMdZWpXKVqUR0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"
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
                    "hover:bg-glow hover:shadow-[0_0_9.2px_var(--accent)] active:scale-95 transition-all duration-300",
                    "cursor-pointer",
                    vertical,
                    horizontal,
                    "bg-glow/80 backdrop-blur-[1px] rounded-full font-light text-desc-lg lg:text-desc-xs border border-glow/80 z-20"
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