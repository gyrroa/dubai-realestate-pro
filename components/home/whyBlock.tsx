import { useTranslations } from "next-intl";
import Image from "next/image";
import WhyCard from "./why/textCard";

export default function WhyBlock() {
    const t = useTranslations('Why');
    const itemsRaw = t.raw('items');
    const whyPosts = Object.values(itemsRaw).flat() as any[];
    return (
        <section className="relative flex flex-col text-center items-center pt-20 pb-15 bg-accent px-8 lg:px-25 overflow-x-clip">
            {/* Background */}
            <Image
                src={"/home/whyChooseUs/background.png"}
                alt={"title"}
                fill
                quality={75}
                className="object-cover rounded-[30px]"
                priority={false}
                sizes="(max-width: 768px)"
            />
            {/* Section title */}
            <h3 className="px-8 lg:px-25 w-full text-center lg:text-start text-title-100 text-glow absolute flex flex-col left-0 -top-5.5 font-serif italic font-bold leading-16.5 tracking-[-6px] z-50">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="833" height="312" viewBox="0 0 833 312" fill="none" className="absolute -left-10 -top-40 rtl:-right-10 -z-20 overflow-visible">
                <g opacity="0.8" filter="url(#filter0_f_273_909)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M344.285 100.004C504.311 99.7577 670.094 110.737 719.65 135.413C769.287 160.13 673.715 184.499 545.151 200.025C410.599 216.273 272.783 215.708 135.704 200.025C-5.86326 183.828 -69.1486 162.93 -9.76412 136.536C43.243 112.977 189.643 100.242 344.285 100.004Z" fill="url(#paint0_linear_273_909)" />
                </g>
                <defs>
                    <filter id="filter0_f_273_909" x="-132" y="0" width="965" height="312" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_273_909" />
                    </filter>
                    <linearGradient id="paint0_linear_273_909" x1="-54.0759" y1="188.061" x2="81.5994" y2="-150.521" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#EFCB68" />
                        <stop offset="1" stopColor="#EFCB68" />
                    </linearGradient>
                </defs>
            </svg>
        </section >
    );
}
