"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
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
    ]; // tbc

    return (
        <div className="flex flex-col pb-9.5 gap-5.5 justify-center">
            {/* Title */}
            <h2 className="font-light text text-title-2xl">
                {t.rich("dev_title", {
                    black: (chunk) => <span className="font-semibold">{chunk}</span>,
                    gold: (chunk) => <span className="font-semibold text-accent italic">{chunk}</span>
                })}
            </h2>
            <div className={cn(
                "gap-2.5 lg:gap-y-5.5 lg:gap-x-8",
                "flex flex-wrap w-full h-full justify-center"
            )}>
                {developerImages.map((src, index) => (
                    <Button asChild variant={"hero_dev"} size={"hero_dev"} key={index} className="w-[28%] h-12 xl:w-fit xl:h-fit">
                        <Link href={"/503"}>
                            <div
                                className="h-full w-full md:w-32 md:h-12 bg-accent group-hover:bg-glow transition-colors duration-600"
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
                        </Link>
                    </Button>
                ))}
            </div>
        </div>

    );
}