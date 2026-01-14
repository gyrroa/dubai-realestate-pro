import AboutSection from "@/components/home/aboutSection";
import ArticleSection from "@/components/home/articleSection";
import ContactSection from "@/components/home/contactSection";
import HeroSection from "@/components/home/heroSection";
import WhyBlock from "@/components/home/whyBlock";
import FadeUp from "@/components/ui/fadeUp";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  // Set active locale
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />

      <hr className="border-0 h-px bg-accent opacity-20 mx-30" />

      <FadeUp>
        <AboutSection />
      </FadeUp>

      <FadeUp>
        <WhyBlock />
      </FadeUp>

      <FadeUp>
        <ArticleSection />
      </FadeUp>

      <FadeUp>
        <ContactSection />
      </FadeUp>
    </>
  );
}
