import { useTranslations } from "next-intl";
import ContactForm from "./contact/contactForm";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ContactSection() {
    const t = useTranslations('Contact');
    return (
        <section id="contact" className={cn(
            "px-8 lg:px-17",
            "py-16 lg:py-30",
            "grid grid-cols-1 lg:grid-cols-2 gap-15 min-h-screen overflow-clip"
        )}>
            {/* Contact Info */}
            <div className="relative flex flex-col justify-start items-center">
                {/* Section Title */}
                <h1 className="flex text-start flex-col font-serif italic font-bold leading-14 lg:leading-16.75 z-50 tracking-[-6px] text-title-100 max-w-144.25 w-full px-15.5">
                    {t.rich('contact_info.title', {
                        gold: (chunks) => <span className="text-end text-accent">{chunks}</span>
                    })}
                </h1>
                {/* Description */}
                <p className="mt-3.5 font-light text-desc-xl text-center tracking-[-1px] max-w-120">
                    {t.rich('contact_info.description', {
                        black: (chunks) => <span className="font-semibold">{chunks}</span>,
                        gold: (chunks) => <span className="font-semibold text-accent">{chunks}</span>
                    })}
                </p>
                {/* Map */}
                <div className="relative h-full w-full mt-9" >
                    {/* Container: Added 'relative' to ensure the pin positions correctly inside */}
                    <div className="z-10 lg:absolute inset-0 rounded-3xl overflow-hidden border-2 border-accent relative">
                        <Image
                            src="/map.png"
                            alt=""
                            width={966}
                            height={646}
                            className="size-full object-cover"
                            draggable={false}
                        />

                        <Link
                            href={"https://maps.app.goo.gl/uSTRj2yq9MEmQcNm9"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-[calc(100%-8px)] z-20"
                        >
                            <Button size="flat" variant="pin" className="group">
                                <div className="flex items-center justify-center w-20 h-22.5 bg-glow border-2 border-accent rounded-3xl relative">
                                    <Image width={42} height={65} alt="Logo" src="/logo.png" className="w-10.5 h-16.25" />

                                    {/* The Pin Tail: 4x4 rotated box */}
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-glow border-b-2 border-r-2 border-accent rotate-45" />
                                </div>
                            </Button>
                        </Link>
                    </div>
                    {/* Address icon */}
                    <div className="z-0 absolute -top-5 -left-5 h-11.25 w-12 rounded-xl bg-glow drop-shadow-[0_0_20px_var(--highlight)]" />
                    <div className="z-20 absolute -top-5 -left-5 bg-glow border-2 border-accent py-[8.5px] px-2.5 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="size-6">
                            <path d="M12 2.25C10.0109 2.25 8.10322 3.04018 6.6967 4.4467C5.29018 5.85322 4.5 7.76088 4.5 9.75C4.5 16.5 12 21.75 12 21.75C12 21.75 19.5 16.5 19.5 9.75C19.5 7.76088 18.7098 5.85322 17.3033 4.4467C15.8968 3.04018 13.9891 2.25 12 2.25ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83994 11.9148 9.45542 11.4462 9.22836 10.8981C9.0013 10.3499 8.94189 9.74667 9.05764 9.16473C9.1734 8.58279 9.45912 8.04824 9.87868 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C15 10.5456 14.6839 11.3087 14.1213 11.8713C13.5587 12.4339 12.7956 12.75 12 12.75Z" fill="#897444" fillOpacity="0.2" />
                            <path d="M12 6C11.2583 6 10.5333 6.21993 9.91661 6.63199C9.29993 7.04404 8.81928 7.62971 8.53545 8.31494C8.25162 9.00016 8.17736 9.75416 8.32205 10.4816C8.46675 11.209 8.8239 11.8772 9.34835 12.4017C9.8728 12.9261 10.541 13.2833 11.2684 13.4279C11.9958 13.5726 12.7498 13.4984 13.4351 13.2145C14.1203 12.9307 14.706 12.4501 15.118 11.8334C15.5301 11.2167 15.75 10.4917 15.75 9.75C15.75 8.75544 15.3549 7.80161 14.6517 7.09835C13.9484 6.39509 12.9946 6 12 6ZM12 12C11.555 12 11.12 11.868 10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92127 10.611C9.75097 10.1999 9.70642 9.7475 9.79323 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.561 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.25 10.3467 14.0129 10.919 13.591 11.341C13.169 11.7629 12.5967 12 12 12ZM12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 12.6938 5.11031 15.8138 7.6875 18.7734C8.84552 20.1108 10.1489 21.3151 11.5734 22.3641C11.6995 22.4524 11.8498 22.4998 12.0037 22.4998C12.1577 22.4998 12.308 22.4524 12.4341 22.3641C13.856 21.3147 15.1568 20.1104 16.3125 18.7734C18.8859 15.8138 20.25 12.6938 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5ZM12 20.8125C10.4503 19.5938 5.25 15.1172 5.25 9.75C5.25 7.95979 5.96116 6.2429 7.22703 4.97703C8.4929 3.71116 10.2098 3 12 3C13.7902 3 15.5071 3.71116 16.773 4.97703C18.0388 6.2429 18.75 7.95979 18.75 9.75C18.75 15.1153 13.5497 19.5938 12 20.8125Z" fill="#897444" />
                        </svg>
                    </div>
                    {/* Right ellipse shadow */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="260" height="265" viewBox="0 0 260 265" fill="none" className="absolute -bottom-25 -right-25 -z-10 pointer-events-none">
                        <g opacity="0.5" filter="url(#filter0_f_280_1574)">
                            <ellipse cx="130" cy="132.5" rx="70" ry="72.5" fill="#EFCB68" />
                            <path d="M130 60.5C168.367 60.5 199.5 92.7188 199.5 132.5C199.5 172.281 168.367 204.5 130 204.5C91.6326 204.5 60.5 172.281 60.5 132.5C60.5 92.7188 91.6326 60.5 130 60.5Z" stroke="black" />
                        </g>
                        <defs>
                            <filter id="filter0_f_280_1574" x="0" y="0" width="260" height="265" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_280_1574" />
                            </filter>
                        </defs>
                    </svg>
                    {/* Address */}
                    <div className="z-20 absolute bottom-0 -right-[24.5px] py-3.5 px-5 bg-glow w-50.5 rounded-[20px] border-2 border-accent" >
                        <p className="leading-4 tracking-[-0.75px] text-right font-light">
                            {t.rich('contact_info.address', {
                                black: (chunks) => <span className="font-semibold">{chunks}</span>,
                                gold: (chunks) => <span className="font-semibold text-accent">{chunks}</span>
                            })}
                        </p>
                    </div>
                </div >
                {/* Contact Info */}
                <div className="flex flex-col xl:flex-row gap-5 w-full mt-5">
                    <div className="flex gap-3 py-3.5 px-5 bg-glow h-full w-full rounded-[20px] border-2 border-accent items-center" >
                        {/* Email Icon */}
                        <div className="rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.50)] h-fit py-[8.5px] px-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="size-6">
                                <path d="M21 5L12 13L3 5H21Z" fill="#897444" fillOpacity="0.2" />
                                <path d="M21.2308 4H2.76923C2.56522 4 2.36956 4.07902 2.2253 4.21967C2.08104 4.36032 2 4.55109 2 4.75V17.5C2 17.8978 2.16209 18.2794 2.4506 18.5607C2.73912 18.842 3.13044 19 3.53846 19H20.4615C20.8696 19 21.2609 18.842 21.5494 18.5607C21.8379 18.2794 22 17.8978 22 17.5V4.75C22 4.55109 21.919 4.36032 21.7747 4.21967C21.6304 4.07902 21.4348 4 21.2308 4ZM12 11.9828L4.74712 5.5H19.2529L12 11.9828ZM9.18365 11.5L3.53846 16.5447V6.45531L9.18365 11.5ZM10.3221 12.5172L11.476 13.5531C11.6179 13.6801 11.8035 13.7506 11.9962 13.7506C12.1888 13.7506 12.3744 13.6801 12.5163 13.5531L13.6702 12.5172L19.2471 17.5H4.74712L10.3221 12.5172ZM14.8163 11.5L20.4615 6.45438V16.5456L14.8163 11.5Z" fill="#897444" />
                            </svg>
                        </div>
                        {/* Email Info */}
                        <div className="text-label-base">
                            <label className="font-semibold leading-5">
                                {t.rich('contact_info.email_rich', {
                                    gold: (chunks) => <span className="text-accent">{chunks}</span>
                                })}
                            </label>
                            <p className="font-light underline leading-5">gilbertmonecillo28@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex gap-3 py-3.5 px-5 bg-glow h-full w-full rounded-[20px] border-2 border-accent items-center" >
                        {/* Whatsapp Icon */}
                        <div className="rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.50)] h-fit py-[8.5px] px-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="size-6">
                                <path d="M12 3C10.4194 2.9998 8.86668 3.41585 7.49796 4.2063C6.12924 4.99674 4.99282 6.1337 4.20303 7.50279C3.41324 8.87189 2.99792 10.4248 2.99887 12.0054C2.99982 13.586 3.417 15.1384 4.20843 16.5066L3.03937 20.0119C2.9953 20.144 2.98891 20.2858 3.0209 20.4214C3.0529 20.557 3.12202 20.681 3.22052 20.7795C3.31902 20.878 3.44301 20.9471 3.57859 20.9791C3.71417 21.0111 3.85598 21.0047 3.98812 20.9606L7.49344 19.7916C8.68869 20.4826 10.0269 20.8894 11.4045 20.9804C12.7822 21.0715 14.1623 20.8443 15.4381 20.3166C16.7139 19.7889 17.8511 18.9748 18.7619 17.9372C19.6727 16.8996 20.3326 15.6663 20.6904 14.3329C21.0483 12.9994 21.0946 11.6015 20.8257 10.2473C20.5569 8.89314 19.9801 7.61895 19.1399 6.52336C18.2998 5.42777 17.2189 4.54016 15.9808 3.92919C14.7427 3.31823 13.3806 3.0003 12 3ZM14.25 17.25C12.2609 17.25 10.3532 16.4598 8.9467 15.0533C7.54017 13.6468 6.75 11.7391 6.75 9.75C6.75 8.95435 7.06607 8.19129 7.62868 7.62868C8.19129 7.06607 8.95435 6.75 9.75 6.75L11.25 9.75L10.095 11.4816C10.5532 12.5763 11.4237 13.4468 12.5184 13.905L14.25 12.75L17.25 14.25C17.25 15.0456 16.9339 15.8087 16.3713 16.3713C15.8087 16.9339 15.0456 17.25 14.25 17.25Z" fill="#897444" fillOpacity="0.2" />
                                <path d="M17.5856 13.5787L14.5856 12.0787C14.4675 12.0199 14.336 11.9933 14.2043 12.0015C14.0726 12.0097 13.9455 12.0525 13.8356 12.1256L12.4584 13.0444C11.8262 12.6968 11.306 12.1766 10.9584 11.5444L11.8772 10.1672C11.9503 10.0573 11.9931 9.93016 12.0013 9.79848C12.0096 9.6668 11.9829 9.53528 11.9241 9.41719L10.4241 6.41719C10.3619 6.29163 10.2658 6.186 10.1466 6.11226C10.0275 6.03853 9.8901 5.99964 9.74999 6C8.75543 6 7.8016 6.39509 7.09834 7.09835C6.39508 7.80161 5.99999 8.75544 5.99999 9.75C6.00247 11.9373 6.87246 14.0343 8.4191 15.5809C9.96574 17.1275 12.0627 17.9975 14.25 18C14.7424 18 15.2301 17.903 15.6851 17.7145C16.14 17.5261 16.5534 17.2499 16.9016 16.9017C17.2499 16.5534 17.5261 16.14 17.7145 15.6851C17.903 15.2301 18 14.7425 18 14.25C18.0001 14.1107 17.9614 13.9741 17.8882 13.8555C17.815 13.7369 17.7102 13.6411 17.5856 13.5787ZM14.25 16.5C12.4604 16.498 10.7447 15.7862 9.47921 14.5208C8.21377 13.2553 7.50198 11.5396 7.49999 9.75C7.49985 9.2298 7.67996 8.72562 8.00968 8.32326C8.33939 7.9209 8.79834 7.64521 9.30843 7.54313L10.3847 9.69938L9.46874 11.0625C9.4003 11.1652 9.35824 11.2831 9.3463 11.406C9.33437 11.5288 9.35291 11.6526 9.4003 11.7666C9.93691 13.0419 10.9515 14.0565 12.2269 14.5931C12.3411 14.6426 12.4659 14.6629 12.59 14.6521C12.7141 14.6413 12.8335 14.5998 12.9375 14.5312L14.3081 13.6181L16.4644 14.6944C16.3615 15.2052 16.0844 15.6645 15.6806 15.9938C15.2767 16.3231 14.7711 16.502 14.25 16.5ZM12 2.25C10.3167 2.24963 8.66195 2.68508 7.19685 3.51396C5.73176 4.34285 4.50622 5.53692 3.63953 6.97997C2.77283 8.42301 2.29451 10.0659 2.25111 11.7486C2.20771 13.4314 2.60071 15.0967 3.39187 16.5825L2.3278 19.7747C2.23967 20.039 2.22687 20.3226 2.29086 20.5938C2.35486 20.8649 2.4931 21.1129 2.6901 21.3099C2.88711 21.5069 3.13508 21.6451 3.40624 21.7091C3.67739 21.7731 3.96101 21.7603 4.2253 21.6722L7.41749 20.6081C8.72509 21.3036 10.1739 21.6921 11.6541 21.744C13.1342 21.7959 14.6067 21.51 15.9599 20.9079C17.313 20.3057 18.5112 19.4033 19.4634 18.269C20.4157 17.1346 21.097 15.7983 21.4557 14.3613C21.8144 12.9244 21.841 11.4246 21.5336 9.97578C21.2261 8.52701 20.5926 7.16732 19.6811 5.99992C18.7697 4.83253 17.6043 3.88811 16.2734 3.23836C14.9425 2.58861 13.481 2.25061 12 2.25ZM12 20.25C10.5497 20.251 9.12477 19.8691 7.86937 19.1428C7.77745 19.0895 7.67526 19.0563 7.56955 19.0455C7.46385 19.0347 7.35706 19.0464 7.25624 19.08L3.74999 20.25L4.91905 16.7438C4.95275 16.643 4.96466 16.5362 4.954 16.4305C4.94333 16.3248 4.91033 16.2226 4.85718 16.1306C3.94778 14.5584 3.58266 12.7299 3.81846 10.929C4.05426 9.12801 4.8778 7.4552 6.16132 6.17006C7.44485 4.88491 9.11661 4.05925 10.9173 3.82118C12.7179 3.5831 14.5468 3.94591 16.1202 4.85333C17.6937 5.76074 18.9236 7.16204 19.6194 8.83983C20.3151 10.5176 20.4377 12.3781 19.9682 14.1327C19.4987 15.8873 18.4632 17.4379 17.0225 18.5439C15.5818 19.65 13.8163 20.2497 12 20.25Z" fill="#897444" />
                            </svg>
                        </div>
                        {/* WhatsApp Info */}
                        <div className="text-label-base">
                            <label className="font-semibold leading-5">
                                {t.rich('contact_info.whatsapp_rich', {
                                    gold: (chunks) => <span className="text-accent">{chunks}</span>
                                })}
                            </label>
                            <p className="font-light underline leading-5">+63 917 120 9248 </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Form */}
            <ContactForm />
        </section>
    );
}
