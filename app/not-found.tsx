import { redirect } from 'next/navigation';
import { getLocale } from 'next-intl/server';

export default async function RootNotFound() {
  const locale = await getLocale();
  redirect(`/${locale}/404`); 
}