"use client";

import { Button } from "./button";

export default function DevBtnGroup() {
    const developerImages = [
        "/home/buttons/dugasta.svg",
        "/home/buttons/samana.svg",
        "/home/buttons/sobha.svg",
        "/home/buttons/emaar.svg",
        "/home/buttons/binghatti.svg",
    ];
    return (
        <div className="flex w-full h-full justify-around">
            {developerImages.map((src, index) => (
                <Button key={index} className="w-fit h-fit">
                    <div
                        className="h-12 w-32 bg-muted-accent hover:bg-accent hover:shadow-[0_0_9.2px_var(--highlight)] hover:scale-110 transition-all duration-150"
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
    );
}