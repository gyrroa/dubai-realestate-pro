import { useTranslations } from "next-intl";
import Image from "next/image";
import WhyCard from "./why/textCard";

export default function WhyBlock() {
    const t = useTranslations('Why');
    const itemsRaw = t.raw('items');
    const whyPosts = Object.values(itemsRaw).flat() as any[];
    return (
        <section className="relative flex flex-col text-center items-center pt-20 pb-15 bg-accent px-8 lg:px-25">
            {/* Background */}
            <Image
                src={"/home/whyChooseUs/background.png"}
                alt={"title"}
                fill
                quality={90}
                className="object-cover rounded-[30px]"
                priority={false}
            />
            {/* Section title */}
            <h3 className="px-8 lg:px-25 w-full text-start text-title-100 text-glow absolute flex flex-col left-0 -top-5.5 font-serif italic font-bold leading-16.5 tracking-[-6px] z-50">
                {t('title')}
            </h3>
            {/* Content */}
            <div className="w-full h-full flex flex-col lg:flex-row justify-between gap-5">
                {whyPosts.map((post, index) => (
                    <div key={post.id} className="flex-1 min-w-0 min-h-full z-10">
                        <WhyCard
                            key={post.id}
                            logo={post.logo}
                            titleKey={`items.item${index + 1}.0.title`}
                            descriptionKey={`items.item${index + 1}.0.description`}
                        />
                    </div>
                ))}
            </div>
            {/* Shadow */}
            <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="645" viewBox="0 0 1440 645" fill="none" className="absolute -top-1/3 lg:-top-1/2 w-full -z-10">
                <g filter="url(#filter0_f_273_909)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M727.08 200.009C1043.62 199.471 1371.54 223.437 1469.56 277.304C1567.75 331.258 1378.7 384.455 1124.4 418.346C858.251 453.815 585.646 452.581 314.5 418.346C34.475 382.989 -90.7054 337.371 26.759 279.755C131.609 228.327 421.194 200.529 727.08 200.009Z" fill="url(#paint0_linear_273_909)" />
                </g>
                <defs>
                    <filter id="filter0_f_273_909" x="-217.224" y="0" width="1913.2" height="644.487" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_273_909" />
                    </filter>
                    <linearGradient id="paint0_linear_273_909" x1="-60.8913" y1="392.229" x2="256.39" y2="-325.238" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#EFCB68" />
                        <stop offset="1" stopColor="#EFCB68" />
                    </linearGradient>
                </defs>
            </svg>
        </section>
    );
}
