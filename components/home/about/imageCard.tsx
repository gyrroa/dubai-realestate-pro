import Image from "next/image";

export default function AboutImageCard({ src, location }: { src: string; location: string }) {
    return (
        <div className="relative size-full overflow-hidden rounded-[30px]">
            {/* Background photo */}
            <Image
                src={src}
                alt={location}
                fill
                className="object-cover rounded-[30px]"
                draggable={false}
                quality={90}
            />
            {/* Inner shadow */}
            <div className="absolute inset-0 rounded-[30px] shadow-[inset_0_0_10px_10px_rgba(0,0,0,0.25)] pointer-events-none" />
            {/* Label */}
            <div className="absolute top-3.75 left-3.75 bg-glow rounded-[10px] py-1.5 px-2.5 font-light text-desc-xs">📍{location}</div>
        </div>
    );
}