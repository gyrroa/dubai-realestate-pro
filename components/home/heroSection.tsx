import { useTranslations } from "next-intl";
import PanoramaCarousel from "./hero/carousel";
import TextRibbon from "./hero/textRibbon";
import DevBtnGroup from "./hero/devBtnGroup";

export default function HeroSection() {

    const t = useTranslations('Hero');
    return (
        <section id="hero" className="relative text-center flex flex-col flex-1 min-h-screen pt-30 md:pt-45">
            {/* Section title */}
            <div className="w-full">
                <h1 className="text-title-6xl font-serif italic text-black font-bold leading-8.5 md:leading-6 tracking-[-3.84px]">
                    {t.rich("title", {
                        gold: (chunks) => <span className="text-accent">{chunks}</span>,
                        br: () => <br className="block md:hidden"/>
                    })}
                </h1>
                <p className="text-title-2xl my-6 leading-6 tracking-[-1.44px]">
                    {t.rich("description", {
                        black: (chunks) => <span className="font-semibold">{chunks}</span>,
                        gold: (chunks) => <span className="text-accent">{chunks}</span>
                    })}
                </p>
            </div>
            <div className="flex-1 w-full flex flex-col relative justify-center -mt-10">
                {/* Carousel */}
                <div className="absolute inset-0 w-full h-full">
                    <PanoramaCarousel />
                    {/* Ribbon */}
                    <TextRibbon />
                </div>
            </div>
            {/* Developer Button Group */}
            <DevBtnGroup />
        </section>
    );
}
