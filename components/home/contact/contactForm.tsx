"use client"

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactForm() {
    const t = useTranslations('Contact');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        whatsapp: '',
        message: ''
    });

    const YOUR_PHONE_NUMBER = "+63 917 120 9248";

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        // Format phone number
        const cleanPhone = YOUR_PHONE_NUMBER.replace(/\D/g, '');

        // Message
        const text = `Hi, I'm ${formData.firstName} ${formData.lastName}.
        Email: ${formData.email}
        WhatsApp: ${formData.whatsapp}
        Message: ${formData.message}`;

        // api.whatsapp.com
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(text)}`;

        const newWindow = window.open(whatsappUrl, '_blank');

        if (!newWindow) {
            alert("Please disable your popup blocker.");
        }
    };

    return (
        <div className="relative gap-5 flex flex-col bg-accent bg-[url(/home/contact/contactBackground.png)] bg-cover bg-no-repeat bg-center border-2 border-foreground rounded-4xl shadow-[0_0_20px_0_rgba(35,29,32,0.25)] p-5 md:p-10">
            <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-5 tracking-[-0.8px] leading-6">

                <div className="flex flex-col xl:flex-row gap-5">
                    <div className="flex gap-5 py-3.5 px-5 bg-glow whitespace-nowrap rounded-[20px] items-center border-2 border-foreground w-full">
                        <label className='text-label-base'>{t('contact_form.first_name')}</label>
                        <input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full border border-muted-border rounded-lg py-1.5 px-3.5 text-black"
                            required
                        />
                    </div>
                    <div className="flex gap-5 py-3.5 px-5 bg-glow whitespace-nowrap rounded-[20px] items-center border-2 border-foreground w-full">
                        <label className='text-label-base'>{t('contact_form.last_name')}</label>
                        <input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full border border-muted-border rounded-lg py-1.5 px-3.5 text-black"
                            required
                        />
                    </div>
                </div>

                {/* Email Address */}
                <div className="flex gap-5 py-3.5 px-5 bg-glow whitespace-nowrap rounded-[20px] items-center border-2 border-foreground">
                    <div className="flex gap-1.25 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
                            <path d="M19.2308 0H0.769231C0.565218 0 0.369561 0.0790178 0.225302 0.21967C0.0810437 0.360322 0 0.551088 0 0.75V13.5C0 13.8978 0.162087 14.2794 0.450605 14.5607C0.739122 14.842 1.13044 15 1.53846 15H18.4615C18.8696 15 19.2609 14.842 19.5494 14.5607C19.8379 14.2794 20 13.8978 20 13.5V0.75C20 0.551088 19.919 0.360322 19.7747 0.21967C19.6304 0.0790178 19.4348 0 19.2308 0ZM10 7.98281L2.74712 1.5H17.2529L10 7.98281ZM7.18365 7.5L1.53846 12.5447V2.45531L7.18365 7.5ZM8.32212 8.51719L9.47596 9.55312C9.61788 9.68014 9.80351 9.75062 9.99615 9.75062C10.1888 9.75062 10.3744 9.68014 10.5163 9.55312L11.6702 8.51719L17.2471 13.5H2.74712L8.32212 8.51719ZM12.8163 7.5L18.4615 2.45438V12.5456L12.8163 7.5Z" fill="#897444" />
                        </svg>
                        <label className="text-label-base">{t('contact_form.email')}</label>
                    </div>
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-muted-border rounded-lg py-1.5 px-3.5 text-black"
                        required
                    />
                </div>

                {/* User's WhatsApp Number */}
                <div className="flex gap-5 py-3.5 px-5 bg-glow whitespace-nowrap rounded-[20px] items-center border-2 border-foreground">
                    <div className="flex gap-1.25 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 3C10.4195 2.9998 8.86671 3.41585 7.49799 4.2063C6.12927 4.99674 4.99285 6.1337 4.20306 7.50279C3.41327 8.87189 2.99795 10.4248 2.9989 12.0054C2.99985 13.586 3.41703 15.1384 4.20847 16.5066L3.0394 20.0119C2.99533 20.144 2.98894 20.2858 3.02093 20.4214C3.05293 20.557 3.12205 20.681 3.22055 20.7795C3.31905 20.878 3.44304 20.9471 3.57862 20.9791C3.7142 21.0111 3.85601 21.0047 3.98815 20.9606L7.49347 19.7916C8.68872 20.4826 10.0269 20.8894 11.4046 20.9804C12.7822 21.0715 14.1623 20.8443 15.4381 20.3166C16.7139 19.7889 17.8512 18.9748 18.762 17.9372C19.6727 16.8996 20.3326 15.6663 20.6905 14.3329C21.0483 12.9994 21.0946 11.6015 20.8258 10.2473C20.5569 8.89314 19.9801 7.61895 19.14 6.52336C18.2998 5.42777 17.2189 4.54016 15.9808 3.92919C14.7427 3.31823 13.3807 3.0003 12 3ZM14.25 17.25C12.2609 17.25 10.3533 16.4598 8.94673 15.0533C7.5402 13.6468 6.75003 11.7391 6.75003 9.75C6.75003 8.95435 7.0661 8.19129 7.62871 7.62868C8.19132 7.06607 8.95438 6.75 9.75003 6.75L11.25 9.75L10.095 11.4816C10.5532 12.5763 11.4237 13.4468 12.5185 13.905L14.25 12.75L17.25 14.25C17.25 15.0456 16.934 15.8087 16.3713 16.3713C15.8087 16.9339 15.0457 17.25 14.25 17.25Z" fill="#897444" fillOpacity="0.2" />
                            <path d="M17.5856 13.5787L14.5856 12.0787C14.4675 12.0199 14.336 11.9933 14.2043 12.0015C14.0726 12.0097 13.9455 12.0525 13.8356 12.1256L12.4584 13.0444C11.8262 12.6968 11.306 12.1766 10.9584 11.5444L11.8772 10.1672C11.9503 10.0573 11.9931 9.93016 12.0013 9.79848C12.0096 9.6668 11.9829 9.53528 11.9241 9.41719L10.4241 6.41719C10.3619 6.29163 10.2658 6.186 10.1466 6.11226C10.0275 6.03853 9.8901 5.99964 9.74999 6C8.75543 6 7.8016 6.39509 7.09834 7.09835C6.39508 7.80161 5.99999 8.75544 5.99999 9.75C6.00247 11.9373 6.87246 14.0343 8.4191 15.5809C9.96574 17.1275 12.0627 17.9975 14.25 18C14.7424 18 15.2301 17.903 15.6851 17.7145C16.14 17.5261 16.5534 17.2499 16.9016 16.9017C17.2499 16.5534 17.5261 16.14 17.7145 15.6851C17.903 15.2301 18 14.7425 18 14.25C18.0001 14.1107 17.9614 13.9741 17.8882 13.8555C17.815 13.7369 17.7102 13.6411 17.5856 13.5787ZM14.25 16.5C12.4604 16.498 10.7447 15.7862 9.47921 14.5208C8.21377 13.2553 7.50198 11.5396 7.49999 9.75C7.49985 9.2298 7.67996 8.72562 8.00968 8.32326C8.33939 7.9209 8.79834 7.64521 9.30843 7.54313L10.3847 9.69938L9.46874 11.0625C9.4003 11.1652 9.35824 11.2831 9.3463 11.406C9.33437 11.5288 9.35291 11.6526 9.4003 11.7666C9.93691 13.0419 10.9515 14.0565 12.2269 14.5931C12.3411 14.6426 12.4659 14.6629 12.59 14.6521C12.7141 14.6413 12.8335 14.5998 12.9375 14.5312L14.3081 13.6181L16.4644 14.6944C16.3615 15.2052 16.0844 15.6645 15.6806 15.9938C15.2767 16.3231 14.7711 16.502 14.25 16.5ZM12 2.25C10.3167 2.24963 8.66195 2.68508 7.19685 3.51396C5.73176 4.34285 4.50622 5.53692 3.63953 6.97997C2.77283 8.42301 2.29451 10.0659 2.25111 11.7486C2.20771 13.4314 2.60071 15.0967 3.39187 16.5825L2.3278 19.7747C2.23967 20.039 2.22687 20.3226 2.29086 20.5938C2.35486 20.8649 2.4931 21.1129 2.6901 21.3099C2.88711 21.5069 3.13508 21.6451 3.40624 21.7091C3.67739 21.7731 3.96101 21.7603 4.2253 21.6722L7.41749 20.6081C8.72509 21.3036 10.1739 21.6921 11.6541 21.744C13.1342 21.7959 14.6067 21.51 15.9599 20.9079C17.313 20.3057 18.5112 19.4033 19.4634 18.269C20.4157 17.1346 21.097 15.7983 21.4557 14.3613C21.8144 12.9244 21.841 11.4246 21.5336 9.97578C21.2261 8.52701 20.5926 7.16732 19.6811 5.99992C18.7697 4.83253 17.6043 3.88811 16.2734 3.23836C14.9425 2.58861 13.481 2.25061 12 2.25ZM12 20.25C10.5497 20.251 9.12477 19.8691 7.86937 19.1428C7.77745 19.0895 7.67526 19.0563 7.56955 19.0455C7.46385 19.0347 7.35706 19.0464 7.25624 19.08L3.74999 20.25L4.91905 16.7438C4.95275 16.643 4.96466 16.5362 4.954 16.4305C4.94333 16.3248 4.91033 16.2226 4.85718 16.1306C3.94778 14.5584 3.58266 12.7299 3.81846 10.929C4.05426 9.12801 4.8778 7.4552 6.16132 6.17006C7.44485 4.88491 9.11661 4.05925 10.9173 3.82118C12.7179 3.5831 14.5468 3.94591 16.1202 4.85333C17.6937 5.76074 18.9236 7.16204 19.6194 8.83983C20.3151 10.5176 20.4377 12.3781 19.9682 14.1327C19.4987 15.8873 18.4632 17.4379 17.0225 18.5439C15.5818 19.65 13.8163 20.2497 12 20.25Z" fill="#897444" />
                        </svg>
                        <label className="text-label-base">{t('contact_form.whatsapp')}</label>
                    </div>
                    <input
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="w-full border border-muted-border rounded-lg py-1.5 px-3.5 text-black"
                    />
                </div>

                {/* Message */}
                <div className="flex flex-1 flex-col gap-3 py-3.5 px-5 bg-glow whitespace-nowrap rounded-[20px] center border-2 border-foreground h-full">
                    <label className='text-label-base'>{t('contact_form.message')}</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border border-muted-border rounded-lg py-1.5 px-3.5 h-full resize-none text-black"
                        required
                    />
                </div>

                {/* Submit Button needs to be inside form or linked by ID */}
                <Button type="submit" variant={"cta1"} size={"cta1"} className="w-fit self-center">
                    {t('contact_form.send_message')}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none" className="w-5 h-3.5 rtl:rotate-180">
                        <path d="M19.5645 9.59241L12.4176 16.7393C11.8816 17.3199 10.9436 17.3199 10.4076 16.7393C9.82691 16.2032 9.82691 15.2652 10.4076 14.7292L15.0977 9.99442H1.42937C0.625349 9.99442 0 9.36907 0 8.56505C0 7.8057 0.625349 7.13568 1.42937 7.13568H15.0977L10.4076 2.44556C9.82691 1.90955 9.82691 0.971524 10.4076 0.435511C10.9436 -0.14517 11.8816 -0.14517 12.4176 0.435511L19.5645 7.58236C20.1452 8.11837 20.1452 9.05639 19.5645 9.59241Z" fill="#231D20" />
                    </svg>
                </Button>
            </form>
        </div>
    );
}