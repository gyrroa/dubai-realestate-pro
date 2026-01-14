"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";


export default function DevBtnGroup() {
    const t = useTranslations('Hero');
    const developerImages = [
        "/home/hero/buttons/emaar.svg",
        "/home/hero/buttons/sobha.svg",
        "/home/hero/buttons/dugasta.svg",
        "/home/hero/buttons/azizi.svg",
        "/home/hero/buttons/binghatti.svg",
        "/home/hero/buttons/damac.svg",
        "/home/hero/buttons/nakheel.svg",
        "/home/hero/buttons/samana.svg",
        "/home/hero/buttons/danube.svg",
    ];
    return (
        <div className="flex flex-col pt-5.5 pb-9.5 gap-5.5 justify-center">
            {/* Title */}
            <h2 className="font-medium text text-title-2xl">
                {t.rich("dev_title", {
                    gold: (chunk) => <span className="text-accent">{chunk}</span>
                })}
            </h2>
            <div className="flex flex-wrap w-full h-full gap-2.5 lg:gap-y-5.5 lg:gap-x-8 justify-center">
                {developerImages.map((src, index) => (
                    <Button variant={"hero_dev"} size={"hero_dev"} key={index} className="w-1/4 h-12 xl:w-fit xl:h-fit">
                        <div
                            className="h-12 w-32 bg-accent group-hover:bg-glow transition-colors duration-600"
                            style={{
                                maskImage: `url(${src})`,
                                maskSize: "contain",
                                maskRepeat: "no-repeat",
                                maskPosition: "center",
                                WebkitMaskImage: `url(${src})`,
                                WebkitMaskSize: "contain",
                                WebkitMaskRepeat: "no-repeat",
                                WebkitMaskPosition: "center",
                            }}
                        />
                    </Button>
                ))}
            </div>
        </div>

    );
}