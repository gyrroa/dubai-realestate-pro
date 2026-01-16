"use client"

import { DotLottiePlayer } from "@dotlottie/react-player";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-200 flex items-center justify-center backdrop-blur-[10px]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#FBFBF2_0%,#959590_100%)] opacity-80" aria-hidden="true" />
            <div className="relative z-10 w-150 h-auto items-center flex justify-center">
                <DotLottiePlayer
                    src="/loading.lottie"
                    autoplay
                    loop
                />
            </div>
        </div >
    );
}