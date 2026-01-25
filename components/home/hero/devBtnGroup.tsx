"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { urlFor } from "@/sanity/lib/image";

export default function DevBtnGroup({ developers }: { developers: any[] }) {
    const t = useTranslations('Hero');
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
                {developers?.map((dev) => {
                    const logoUrl = dev.logo ? urlFor(dev.logo).width(128).url() : "";
                    const slug = dev.slug?.current || "#";

                    return (
                        <Button asChild variant="hero_dev" size="hero_dev" key={dev._id} className="w-fit h-fit">
                            {/* <Link href={`/${slug}`}> */}
                            <Link href={`/503`}>
                                <div
                                    className="w-32 h-12 bg-accent group-hover:bg-glow transition-colors duration-600"
                                    style={{
                                        maskImage: `url(${logoUrl})`,
                                        maskSize: "contain",
                                        maskRepeat: "no-repeat",
                                        maskPosition: "center",
                                        WebkitMaskImage: `url(${logoUrl})`,
                                        WebkitMaskSize: "contain",
                                        WebkitMaskRepeat: "no-repeat",
                                        WebkitMaskPosition: "center",
                                    }}
                                />
                            </Link>
                        </Button>
                    );
                })}
            </div>
        </div>

    );
}