"use client";

import Image from "next/image";

export default function PanoramaCarousel() {
    const developerImages = [
        "/home/hero/1.png",
        "/home/hero/2.png",
        "/home/hero/3.png",
    ];
    return (
        <div className="flex w-full -mt-30 justify-between h-full gap-14 overflow-hidden mask-[radial-gradient(ellipse_120%_50%_at_50%_0%,transparent_45%,#000_45.5%),radial-gradient(ellipse_120%_50%_at_50%_100%,transparent_45%,#000_45.5%)] mask-intersect">
            {developerImages.map((src, index) => (
                <div key={index} className="w-full">
                    <Image src={src} alt={src} width={720} height={720} className="size-full" />
                </div>
            ))}
        </div>
    );
}