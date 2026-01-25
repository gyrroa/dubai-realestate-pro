import { getTranslations, getLocale } from "next-intl/server";
import { client } from "@/sanity/lib/client";
import { DEVELOPERS_HERO_QUERY } from "@/sanity/lib/queries";
import PanoramaCarousel from "./hero/carousel";
import TextRibbon from "./hero/textRibbon";
import DevBtnGroup from "./hero/devBtnGroup";
import { cn } from "@/lib/utils";

export default async function HeroSection() {
    const t = await getTranslations('Hero');
    const developers = await client.fetch(DEVELOPERS_HERO_QUERY);

    return (
        <section id="home" className="relative text-center flex flex-col flex-1 min-h-screen pt-30 md:pt-45">
            {/* Section title */}
            <div className="w-full px-4">
                <h1 className="text-title-6xl font-serif italic text-black font-bold leading-8 md:leading-7 lg:leading-6 tracking-[-3.84px] pointer-events-none">
                    {t.rich("title", {
                        gold: (chunks) => <span className="text-accent">{chunks}</span>,
                        br: () => <br className="block md:hidden" />
                    })}
                </h1>
                <p className="text-title-2xl my-6 leading-8 md:leading-7 lg:leading-6  tracking-[-1.44px]">
                    {t.rich("description", {
                        black: (chunks) => <span className="font-semibold">{chunks}</span>,
                        gold: (chunks) => <span className="text-accent">{chunks}</span>
                    })}
                </p>
            </div>
            {/* Banner */}
            <div className="grow w-full flex flex-col relative -mt-10">
                <div className={cn(
                    "relative w-full flex items-end",
                    "h-[30vh] md:h-[50vh] lg:h-[60vh]",
                    "min-h-105 md:min-h-125"
                )}>
                    {/* Carousel */}
                    <div className="absolute inset-0 z-0">
                        <PanoramaCarousel developers={developers} />
                    </div>
                    {/* Ribbon */}
                    <div className="relative z-10 w-full mb-4 md:mb-6 lg:mb-10  pointer-events-none">
                        <TextRibbon />
                    </div>
                </div>
            </div>
            {/* Developer Button Group */}
            <DevBtnGroup developers={developers} />
        </section>
    );
}
