import AboutSection from "@/components/home/aboutSection";
import ArticleSection from "@/components/home/articleSection";
import BrokerSection from "@/components/home/brokerSection";
import ContactSection from "@/components/home/contactSection";
import HeroSection from "@/components/home/heroSection";
import TestSection from "@/components/home/test";
import WhyBlock from "@/components/home/whyBlock";
import FadeUp from "@/components/ui/fadeUp";
import { setRequestLocale } from "next-intl/server";
import { Suspense } from "react";
import { Skeleton } from "./skeleton";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  // Set active locale
  setRequestLocale(locale);
  return (
    <>
      <Suspense>
        <HeroSection />
      </Suspense>

      <hr className="border-0 h-px bg-accent opacity-20 mx-10 md:mx-20 lg:mx-30" />

      <FadeUp>
        <AboutSection />
      </FadeUp>

      <FadeUp>
        <BrokerSection />
      </FadeUp>

      <WhyBlock />

      <FadeUp>
        <ArticleSection />
      </FadeUp>

      <FadeUp>
        <ContactSection />
      </FadeUp>
    </>
  );
}
