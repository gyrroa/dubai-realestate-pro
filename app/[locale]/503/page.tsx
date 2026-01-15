"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function UnderConstruction() {
    const t = useTranslations('503');
    const router = useRouter();
    return (
        <main className="relative flex flex-col items-center justify-center min-h-screen px-8 text-center">
            <h1 className={cn(
                "tracking-[-1.84px] md:tracking-[-2.84px] lg:tracking-[-3.84px]",
                "text-title-64 font-serif italic font-bold"
            )}>
                {t.rich("title", {
                    gold: (chunks) => <span className="text-accent">{chunks}</span>
                })}
            </h1>
            <div className={cn(
                "leading-5.5 md:leading-6.5 lg:leading-7.5 tracking-[-1.44px]",
                "font-light text-title-2xl max-w-150"
            )}>
                {t.rich("description", {
                    black: (chunks) => <span className="font-medium">{chunks}</span>
                })}
            </div>
            <Button variant="cta1" size="cta1" className="mt-5" onClick={() => router.back()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none" className="w-5 h-3.5 ml-2 ltr:rotate-180">
                    <path d="M19.5645 9.59241L12.4176 16.7393C11.8816 17.3199 10.9436 17.3199 10.4076 16.7393C9.82691 16.2032 9.82691 15.2652 10.4076 14.7292L15.0977 9.99442H1.42937C0.625349 9.99442 0 9.36907 0 8.56505C0 7.8057 0.625349 7.13568 1.42937 7.13568H15.0977L10.4076 2.44556C9.82691 1.90955 9.82691 0.971524 10.4076 0.435511C10.9436 -0.14517 11.8816 -0.14517 12.4176 0.435511L19.5645 7.58236C20.1452 8.11837 20.1452 9.05639 19.5645 9.59241Z" fill="#231D20" />
                </svg>
                {t("button")}
            </Button>
            {/* Top Left Shadow */}
            <svg xmlns="http://www.w3.org/2000/svg" width="397" height="574" viewBox="0 0 397 574" fill="none" className="absolute top-0 left-0 pointer-events-none -z-10">
                <g opacity="0.5" filter="url(#filter0_f_837_2971)">
                    <path d="M197 262C197 323.856 148.871 374 89.5 374C30.1294 374 -18 323.856 -18 262C-18 200.144 30.1294 150 89.5 150C148.871 150 197 200.144 197 262Z" fill="#EFCB68" />
                    <path d="M89.5 150.5C148.575 150.5 196.5 200.401 196.5 262C196.5 323.599 148.575 373.5 89.5 373.5C30.4247 373.5 -17.5 323.599 -17.5 262C-17.5 200.401 30.4247 150.5 89.5 150.5Z" stroke="black" />
                </g>
                <defs>
                    <filter id="filter0_f_837_2971" x="-218" y="-50" width="615" height="624" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_837_2971" />
                    </filter>
                </defs>
            </svg>
            {/* Bottom Right Shadow */}
            <svg xmlns="http://www.w3.org/2000/svg" width="363" height="449" viewBox="0 0 363 449" fill="none" className="absolute bottom-0 right-0 pointer-events-none -z-10">
                <g opacity="0.5" filter="url(#filter0_f_837_2969)">
                    <path d="M440 324.5C440 393.259 386.274 449 320 449C253.726 449 200 393.259 200 324.5C200 255.741 253.726 200 320 200C386.274 200 440 255.741 440 324.5Z" fill="#EFCB68" />
                    <path d="M320 200.5C385.981 200.5 439.5 255.999 439.5 324.5C439.5 393.001 385.981 448.5 320 448.5C254.019 448.5 200.5 393.001 200.5 324.5C200.5 255.999 254.019 200.5 320 200.5Z" stroke="black" />
                </g>
                <defs>
                    <filter id="filter0_f_837_2969" x="0" y="0" width="640" height="649" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_837_2969" />
                    </filter>
                </defs>
            </svg>
        </main>
    );
}