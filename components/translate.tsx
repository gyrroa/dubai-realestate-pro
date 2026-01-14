"use client";

import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';
import { Button } from './ui/button';
import { useLenis } from 'lenis/react';

export default function LanguageFooterBtn() {
    const lenis = useLenis();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const isArabic = pathname.startsWith('/ar');

    const toggleLanguage = () => {
        const nextLocale = isArabic ? 'en' : 'ar';
        const cleanPath = pathname.replace(/^\/(ar|en)/, '');
        const newPath = `/${nextLocale}${cleanPath}`;

        lenis?.scrollTo(0, { immediate: false });

        setTimeout(() => {
            startTransition(() => {
                router.replace(newPath);
            });
        }, 800);
    };
    return (
        <Button
            variant="footer_button"
            size={"language"}
            onClick={toggleLanguage}
            disabled={isPending}
        >
            {isArabic ? 'English' : 'العربية'}
        </Button>
    );
}