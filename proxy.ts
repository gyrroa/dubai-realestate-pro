import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // English and Arabic
    locales: ['en', 'ar'],
    defaultLocale: 'en'
});

export const config = {
    matcher: ['/', '/(ar|en)/:path*']
};