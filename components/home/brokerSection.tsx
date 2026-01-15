import { cn } from "@/lib/utils";
import Image from "next/image";

export default function BrokerSection() {
    return (
        <section id="broker" className={cn(
            "pb-30 lg:pb-6", // distinct from desktop
            "gap-7.5 md:8.5 lg:gap-9.5",
            "flex flex-col px-8 items-center overflow-x-clip"
        )}>
            {/* President Group */}
            <div className="flex flex-col lg:flex-row gap-6.5 justify-center items-center">

                {/* President Profile */}
                <div className="flex flex-col size-fit items-center lg:-mt-35 -z-10 lg:z-10">
                    <Image
                        src="/home/broker/pres.png"
                        width={600}
                        height={600}
                        quality={90}
                        alt="pres"
                        className="w-127.75 h-auto -mb-34 hidden lg:block"
                        draggable={false}
                    />
                    {/* Content */}
                    <div className={cn(
                        "py-4.25 md:py-5.25 lg:py-6.75",
                        "px-6 md:px-7 lg:px-8 ",
                        "gap-4.5 md:gap-5.5 lg:gap-6.5 ",
                        "relative flex flex-col bg-glow rounded-[30px] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] border border-accent",
                    )}>
                        {/* Name */}
                        <h2 className={cn(
                            "leading-1 md:leading-2 lg:leading-3",
                            "tracking-[-1.44px]",
                            "text-title-48 font-serif italic font-semibold text-center"
                        )}>
                            <span className="text-accent">Anthony Gerard </span>
                            O. Leuterio
                        </h2>
                        {/* Position */}
                        <p className="font-light text-title-2xl leading-5.75 tracking-[-1.44px] text-center max-w-113.75">
                            <span className="italic font-medium">Founder and President </span>of Filipino Homes
                            <br />
                            <span className="italic font-medium">President </span>of FHI Global Realty Dubai
                        </p>
                        {/* Shadow */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="260" height="265" viewBox="0 0 260 265" fill="none" className="absolute bottom-0 -left-25 -z-10">
                            <g opacity="0.5" filter="url(#filter0_f_718_1870)">
                                <path d="M200 132.5C200 172.541 168.66 205 130 205C91.3401 205 60 172.541 60 132.5C60 92.4594 91.3401 60 130 60C168.66 60 200 92.4594 200 132.5Z" fill="#EFCB68" />
                                <path d="M130 60.5C168.367 60.5 199.5 92.7188 199.5 132.5C199.5 172.281 168.367 204.5 130 204.5C91.6326 204.5 60.5 172.281 60.5 132.5C60.5 92.7188 91.6326 60.5 130 60.5Z" stroke="black" />
                            </g>
                            <defs>
                                <filter id="filter0_f_718_1870" x="0" y="0" width="260" height="265" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_718_1870" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
                {/* Pres Mobile Image */}
                <Image
                    src="/home/broker/pres.png"
                    width={600}
                    height={600}
                    quality={90}
                    alt="pres"
                    className="w-auto -mb-20 -mt-15 lg:hidden"
                    draggable={false}
                />
                {/* President Bio */}
                <div className={cn(
                    "py-8 md:py-9 lg:py-10",
                    "px-6 md:px-7 lg:px-8",
                    "lg:bottom-16",
                    "relative size-fit flex flex-col bg-glow rounded-[30px] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] border border-accent"
                )}>
                    <h1 className={cn(
                        "lg:-left-24",
                        "leading-16.75",
                        "absolute text-title-100 font-serif italic font-bold -top-12 tracking-[-6px] whitespace-nowrap text-center lg:text-left self-center"
                    )}>
                        Meet your <span className="text-accent">Broker</span>
                    </h1>
                    <p className="font-light text-title-2xl leading-6.5 lg:leading-7.5 tracking-[-1.44px] max-w-119">
                        <span className="italic font-medium">Anthony Gerard O. Leuterio</span> is the <span className="font-medium"><span className="text-accent">Founder and President</span> of Filipino Homes</span>, recognized
                        as the second Filipino ever named <span className="font-medium">International <span className="text-accent">REALTOR® of the Year 2024 </span></span>
                        by the National Association of REALTORS® (USA).
                    </p>
                    {/* Shadow */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="303" height="309" viewBox="0 0 303 309" fill="none" className="absolute -right-35 bottom-20 -z-10">
                        <g opacity="0.41" filter="url(#filter0_f_718_1868)">
                            <path d="M243 154.5C243 206.691 202.034 249 151.5 249C100.966 249 60 206.691 60 154.5C60 102.309 100.966 60 151.5 60C202.034 60 243 102.309 243 154.5Z" fill="#EFCB68" />
                            <path d="M151.5 60.5C201.743 60.5 242.5 102.57 242.5 154.5C242.5 206.43 201.743 248.5 151.5 248.5C101.257 248.5 60.5 206.43 60.5 154.5C60.5 102.57 101.257 60.5 151.5 60.5Z" stroke="black" />
                        </g>
                        <defs>
                            <filter id="filter0_f_718_1868" x="0" y="0" width="303" height="309" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_718_1868" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            {/* Separator */}
            <hr className="border-0 h-px bg-accent opacity-20 w-full lg:hidden block" />

            {/* Vice President Group */}
            <div className="flex flex-col-reverse lg:flex-row gap-6.5 justify-center items-center lg:items-start w-fit">

                {/* Vice President Bio */}
                <div className={cn(
                    "py-8 md:py-9 lg:py-10",
                    "px-6 md:px-7 lg:px-8",
                    "relative size-fit flex flex-col bg-glow rounded-[30px] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] border border-accent"
                )}>
                    <p className="font-light text-title-2xl leading-6.5 lg:leading-7.5 tracking-[-1.44px] max-w-119">
                        <span className="italic font-medium">Gilbert Monecillo</span> is the <span className="font-medium"><span className="text-accent">Vice President</span> for Global Expansion of Filipino Homes</span> a proven authority
                        in Philippine real estate with over <span className="font-medium"><span className="text-accent">15 years </span>of experience</span>, leading Filipino Homes VIP as
                        the <span className="font-medium">nationwide <span className="text-accent">Top 1 </span></span>team leader.
                    </p>
                    {/* Mobile shadow */}
                    {/* Shadow */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="339" height="346" viewBox="0 0 339 346" fill="none" className="absolute block bottom-20 right-0 -z-10 lg:hidden">
                        <g opacity="0.41" filter="url(#filter0_f_718_1874)">
                            <path d="M279 173C279 235.408 229.975 286 169.5 286C109.025 286 60 235.408 60 173C60 110.592 109.025 60 169.5 60C229.975 60 279 110.592 279 173Z" fill="#EFCB68" />
                            <path d="M169.5 60.5C229.684 60.5 278.5 110.853 278.5 173C278.5 235.147 229.684 285.5 169.5 285.5C109.316 285.5 60.5001 235.147 60.5001 173C60.5001 110.853 109.316 60.5 169.5 60.5Z" stroke="black" />
                        </g>
                        <defs>
                            <filter id="filter0_f_718_1874" x="0" y="0" width="339" height="346" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_718_1874" />
                            </filter>
                        </defs>
                    </svg>
                </div>

                {/* Vice President Profile */}
                {/* Vice Pres Mobile Image */}
                <Image
                    src="/home/broker/vicePres.png"
                    width={600}
                    height={600}
                    quality={90}
                    alt="vice-pres"
                    className="w-50 md:w-70 lg:w-85.75 h-auto -mb-20 -mt-15 lg:-mb-34 block lg:hidden"
                    draggable={false}
                />
                <div className={cn(
                    "lg:-mt-35 lg:z-10",
                    "flex flex-col size-fit items-center -z-10")}>
                    <Image
                        src="/home/broker/vicePres.png"
                        width={600}
                        height={600}
                        quality={90}
                        alt="vice-pres"
                        className="w-95.75 h-auto -mb-34 -mt-15 hidden lg:block"
                        draggable={false}
                    />
                    {/* Content */}
                    <div className={cn(
                        "py-4.25 md:py-5.25 lg:py-6.75",
                        "px-6 md:px-7 lg:px-8 ",
                        "gap-4.5 md:gap-5.5 lg:gap-6.5 ",
                        "relative flex flex-col bg-glow rounded-[30px] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] border border-accent",
                    )}>
                        {/* Name */}
                        <h2 className={cn(
                            "leading-1 md:leading-2 lg:leading-3",
                            "tracking-[-1.44px]",
                            "text-title-48 font-serif italic font-semibold text-center"
                        )}>
                            <span className="text-accent">Gilbert </span>
                            Monecillo
                        </h2>
                        {/* Position */}
                        <p className="font-light text-title-2xl leading-5.75 tracking-[-1.44px] text-center max-w-104">
                            <span className="italic font-medium">Vice President for Global Expansion </span>of Filipino Homes
                            <br />
                            <span className="italic font-medium">Vice President for Mindanao </span>of ACRES
                        </p>
                        {/* Shadow */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="339" height="346" viewBox="0 0 339 346" fill="none" className="absolute hidden lg:block bottom-0 right-0 -z-10 ">
                            <g opacity="0.41" filter="url(#filter0_f_718_1874)">
                                <path d="M279 173C279 235.408 229.975 286 169.5 286C109.025 286 60 235.408 60 173C60 110.592 109.025 60 169.5 60C229.975 60 279 110.592 279 173Z" fill="#EFCB68" />
                                <path d="M169.5 60.5C229.684 60.5 278.5 110.853 278.5 173C278.5 235.147 229.684 285.5 169.5 285.5C109.316 285.5 60.5001 235.147 60.5001 173C60.5001 110.853 109.316 60.5 169.5 60.5Z" stroke="black" />
                            </g>
                            <defs>
                                <filter id="filter0_f_718_1874" x="0" y="0" width="339" height="346" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_718_1874" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </section >
    );
}