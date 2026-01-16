import { useTranslations } from "next-intl";
import PanoramaCarousel from "./hero/carousel";
import TextRibbon from "./hero/textRibbon";
import DevBtnGroup from "./hero/devBtnGroup";

export default function HeroSection() {
    const t = useTranslations('Hero');
    return (
        <section id="home" className="relative text-center flex flex-col flex-1 min-h-screen pt-30 md:pt-45">
            {/* Section title */}
            <div className="w-full px-4">
                <h1 className="text-title-6xl font-serif italic text-black font-bold leading-8 md:leading-7 lg:leading-6 tracking-[-3.84px]">
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
                <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] min-h-125 flex items-end">
                    {/* Carousel */}
                    <div className="absolute inset-0 z-0">
                        <PanoramaCarousel />
                    </div>
                    {/* Ribbon */}
                    <div className="relative z-10 w-full mb-6 md:mb-10 lg:mb-14 pointer-events-none">
                        <TextRibbon />
                    </div>
                </div>
            </div>
            {/* Developer Button Group */}
            <DevBtnGroup />
        </section>
    );
}
