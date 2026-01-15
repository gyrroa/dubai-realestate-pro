import { ArrowRight } from "lucide-react";
import ArticleCard from "./article/articleCard"
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";

export default function ArticleSection() {
    const t = useTranslations('Article');
    const itemsRaw = t.raw('items');
    const articlePosts = Object.values(itemsRaw).flat() as any[];
    return (
        <section id="articles" className={cn(
            "pt-50 md:pt-60 lg:pt-70 pb-30",
            "px-8 lg:px-25",
            "relative flex flex-col text-center items-center min-h-screen overflow-clip"
        )}>
            <h1 className="absolute w-full flex flex-col left-1/2 -translate-x-1/2 top-35 md:top-45 lg:top-55 font-serif italic font-bold z-50 leading-16.75">
                {t.rich('title', {
                    black: (chunks) => <span className="text-title-64 tracking-[-3.84px] ">{chunks}</span>,
                    gold: (chunks) => <span className="text-title-8xl text-accent -mt-7 md:-mt-4.5 lg:-mt-2 tracking-[-5.76px] ">{chunks}</span>
                })}
            </h1>

            {/* Article Card Container */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full h-full gap-7.75 justify-center grow">
                {articlePosts.map((post) => (
                    <div key={post.id} className="flex-1 min-h-full z-10">
                        <ArticleCard key={post.id} src={post.src} title={post.title} description={post.description} />
                    </div>
                ))}

                {/* Left ellipse shadow */}
                <svg xmlns="http://www.w3.org/2000/svg" width="260" height="265" viewBox="0 0 260 265" fill="none" className="absolute -left-30 -bottom-30 pointer-events-none">
                    <g opacity="0.5" filter="url(#filter0_f_275_1170)">
                        <ellipse cx="130" cy="132.5" rx="70" ry="72.5" fill="#EFCB68" />
                        <path d="M130 60.5C168.367 60.5 199.5 92.7188 199.5 132.5C199.5 172.281 168.367 204.5 130 204.5C91.6326 204.5 60.5 172.281 60.5 132.5C60.5 92.7188 91.6326 60.5 130 60.5Z" stroke="black" />
                    </g>
                    <defs>
                        <filter id="filter0_f_275_1170" x="0" y="0" width="260" height="265" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_275_1170" />
                        </filter>
                    </defs>
                </svg>
                {/* Right ellipse shadow */}
                <svg xmlns="http://www.w3.org/2000/svg" width="260" height="265" viewBox="0 0 260 265" fill="none" className="absolute -right-30 -top-30 pointer-events-none">
                    <g opacity="0.5" filter="url(#filter0_f_275_1170)">
                        <ellipse cx="130" cy="132.5" rx="70" ry="72.5" fill="#EFCB68" />
                        <path d="M130 60.5C168.367 60.5 199.5 92.7188 199.5 132.5C199.5 172.281 168.367 204.5 130 204.5C91.6326 204.5 60.5 172.281 60.5 132.5C60.5 92.7188 91.6326 60.5 130 60.5Z" stroke="black" />
                    </g>
                    <defs>
                        <filter id="filter0_f_275_1170" x="0" y="0" width="260" height="265" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_275_1170" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <Button asChild variant={"cta2"} size={"cta2"} className="mt-8">
                <Link href={"/503"}>
                    {t('view_more')}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none" className="rtl:rotate-180">
                        <path d="M19.5645 9.59241L12.4176 16.7393C11.8816 17.3199 10.9436 17.3199 10.4076 16.7393C9.82691 16.2032 9.82691 15.2652 10.4076 14.7292L15.0977 9.99442H1.42937C0.625349 9.99442 0 9.36907 0 8.56505C0 7.8057 0.625349 7.13568 1.42937 7.13568H15.0977L10.4076 2.44556C9.82691 1.90955 9.82691 0.971524 10.4076 0.435511C10.9436 -0.14517 11.8816 -0.14517 12.4176 0.435511L19.5645 7.58236C20.1452 8.11837 20.1452 9.05639 19.5645 9.59241Z" fill="#FFFFFE" />
                    </svg>
                </Link>
            </Button>
        </section>
    );
}
