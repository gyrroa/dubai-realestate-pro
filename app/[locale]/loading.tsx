"use client"
import dynamic from 'next/dynamic';

const DotLottieReact = dynamic(
    () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
    { ssr: false }
);

export default function Loading() {
    return (
        <div className="fixed inset-0 z-200 flex items-center justify-center backdrop-blur-md">
            <div className="absolute inset-0 bg-[#FBFBF2] opacity-80" />
            <div className="relative z-10 w-150">
                <DotLottieReact
                    src="/loading.lottie"
                    autoplay
                    loop
                />
            </div>
        </div>
    );
}